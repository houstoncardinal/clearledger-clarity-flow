import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, Sparkles, Star, TrendingUp, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();
  
  const keyBenefits = [
    t('benefits.quickbooks'),
    t('benefits.monthly'),
    t('benefits.accounts'),
    t('benefits.reporting')
  ];

  const stats = [
    { value: '500+', label: 'Businesses Served', icon: Users },
    { value: '10+', label: 'Years Experience', icon: TrendingUp },
    { value: '99%', label: 'Client Retention', icon: Star },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 bg-mesh opacity-70" />
      
      {/* Decorative blobs */}
      <div className="blob w-[600px] h-[600px] -top-40 -right-40 opacity-30" />
      <div className="blob w-[400px] h-[400px] bottom-20 -left-20 opacity-20" />
      
      <div className="container relative z-10 py-20 sm:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="badge-premium">
              <Shield className="w-4 h-4 text-primary" />
              <span>Trusted by 500+ Businesses Nationwide</span>
            </div>
          </motion.div>
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <img 
              src="/logo.png" 
              alt="ClearLedger Solutions Logo" 
              className="w-72 sm:w-80 lg:w-96 xl:w-[28rem] h-auto object-contain drop-shadow-lg"
            />
          </motion.div>
          
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-10"
          >
            {t('hero.subtitle')}
            <span className="font-semibold text-foreground"> {t('hero.saveTime')}</span> {t('hero.description')}
          </motion.p>

          {/* Key Benefits - Horizontal Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {keyBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border/60 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 group w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 group w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('hero.ctaSecondary')}
              </Button>
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-muted-foreground text-center"
          >
            {t('hero.noCommitment')} • {t('hero.strategySession')} • {t('hero.customProposal')}
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-10 border-t border-border/60"
          >
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="icon-container-sm">
                      <stat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="font-display text-3xl sm:text-4xl text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
