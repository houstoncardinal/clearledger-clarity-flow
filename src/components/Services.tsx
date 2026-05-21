import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  PieChart, 
  FileText, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = ({ asSection = false }: { asSection?: boolean }) => {
  const services = [
    {
      icon: Calculator,
      title: 'QuickBooks Online & Desktop',
      description: 'Expert bookkeeping with both QB Online and Desktop platforms, ensuring your books are accurate and up-to-date.',
      features: [
        'Monthly transaction categorization',
        'Account reconciliation',
        'Financial statement preparation',
        'Multi-entity management'
      ],
      idealFor: 'Small to mid-sized businesses with 50-500+ transactions monthly',
      href: '/quickbooks-services'
    },
    {
      icon: PieChart,
      title: 'Monthly Management & Reconciliation',
      description: 'Comprehensive monthly financial management to keep your business on track and compliant.',
      features: [
        'Bank & credit card reconciliation',
        'Monthly financial reporting',
        'Variance analysis',
        'Cash flow monitoring'
      ],
      idealFor: 'Growing businesses needing regular financial insights',
      href: '/monthly-management'
    },
    {
      icon: FileText,
      title: 'Billing & Accounts Payable',
      description: 'Streamlined invoicing and A/P management to improve cash flow and vendor relationships.',
      features: [
        'Automated invoice generation',
        'Payment tracking & follow-up',
        'Vendor payment management',
        'Cash flow optimization'
      ],
      idealFor: 'Service-based businesses with recurring billing needs',
      href: '/billing-accounts-payable'
    },
    {
      icon: TrendingUp,
      title: 'Cleanup & Advisory',
      description: 'Comprehensive financial cleanup and strategic advisory services to get your books pristine.',
      features: [
        'Historical data cleanup',
        'Process optimization',
        'Financial strategy consulting',
        'System implementation'
      ],
      idealFor: 'Businesses transitioning or upgrading their financial systems',
      href: '/cleanup-advisory'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-28 relative">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="badge-premium mb-4 sm:mb-6 inline-flex">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm">Our Services</span>
          </div>
          {asSection ? (
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Complete Financial<span className="text-gradient"> Management</span>
            </h2>
          ) : (
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Complete Financial<span className="text-gradient"> Management</span>
            </h1>
          )}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From daily bookkeeping to strategic financial planning, we provide comprehensive 
            outsourced financial services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid - 4 column compact luxury cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 sm:mb-12 md:mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group relative flex flex-col h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-primary/10 p-6 lg:p-7 shadow-[0_4px_30px_-8px_rgba(168,85,247,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.35)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Soft corner glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg lg:text-xl font-bold text-foreground mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Features - compact list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary mt-[3px] flex-shrink-0" />
                      <span className="text-xs text-foreground/80 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA - text link style */}
                <Link 
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-300 mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA - Premium White Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl bg-white border border-primary/10 shadow-[0_8px_60px_-12px_rgba(203,108,230,0.25)] overflow-hidden"
        >
          {/* Subtle gradient glow effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/20 via-pink-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-400/15 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Premium accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored For Your Business
            </span>
            
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-5">
              Need a Custom Solution?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. Let's discuss how we can tailor our services 
              to meet your specific financial management needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group w-full sm:w-auto bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] hover:bg-right text-white font-semibold px-8 py-6 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 text-sm md:text-base"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 font-semibold px-8 py-6 rounded-2xl transition-all duration-300 text-sm md:text-base"
                >
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
