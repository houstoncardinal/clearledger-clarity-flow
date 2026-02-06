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

const Services = () => {
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
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Complete Financial
            <span className="text-gradient"> Management</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From daily bookkeeping to strategic financial planning, we provide comprehensive 
            outsourced financial services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="card-service group"
              >
                {/* Icon */}
                <div className="icon-container mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 w-12 h-12 sm:w-14 sm:h-14">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-1.5 sm:gap-2">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-accent/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 border border-primary/10">
                  <h4 className="font-semibold text-accent-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm">Ideal For:</h4>
                  <p className="text-xs sm:text-sm text-accent-foreground/80">{service.idealFor}</p>
                </div>

                {/* CTA */}
                <Link to={service.href}>
                  <Button variant="outline" className="w-full btn-secondary group/btn text-xs sm:text-sm h-10 sm:h-11">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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
