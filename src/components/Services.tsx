import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  PieChart, 
  FileText, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap
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
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="badge-premium mb-6 inline-flex">
            <Zap className="w-4 h-4 text-primary" />
            <span>Our Services</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Complete Financial
            <span className="text-gradient"> Management</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
          className="grid md:grid-cols-2 gap-8 mb-16"
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
                <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-accent/50 p-4 rounded-2xl mb-6 border border-primary/10">
                  <h4 className="font-semibold text-accent-foreground mb-1 text-sm">Ideal For:</h4>
                  <p className="text-sm text-accent-foreground/80">{service.idealFor}</p>
                </div>

                {/* CTA */}
                <Link to={service.href}>
                  <Button variant="outline" className="w-full btn-secondary group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-section text-center text-primary-foreground"
        >
          <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4 relative z-10">
            Need a Custom Solution?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg relative z-10">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific financial management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold px-8 py-4 rounded-2xl shadow-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-2xl">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
