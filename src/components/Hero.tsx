import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Shield, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Hero = () => {
  const { t } = useLanguage();

  const features = [
    'QuickBooks Certified',
    'Monthly Management',
    'Payroll Processing',
    'Financial Reporting'
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Animated background paths */}
      <BackgroundPaths />
      
      {/* Clean white background with subtle accent */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none">
        {/* Subtle gradient accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        
        {/* Very subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-primary/5 border border-primary/15 shadow-sm">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"
                />
                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary" />
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground">Trusted by Businesses Nationwide</span>
              <div className="hidden sm:block h-3 sm:h-4 w-px bg-border" />
              <span className="hidden sm:block text-[10px] sm:text-xs text-muted-foreground font-medium">Est. 2014</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight text-foreground">
              <span className="block mb-2">Where Clarity</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-[#a855f7] to-primary bg-clip-text text-transparent">
                  Meets Compliance
                </span>
                {/* Underline accent */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-primary via-[#a855f7] to-primary rounded-full origin-left"
                />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
            <span className="font-semibold text-foreground"> {t('hero.saveTime')}</span> {t('hero.description')}
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4"
          >
            <Link to="/contact">
              <Button 
                className="group h-14 sm:h-16 px-8 sm:px-10 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                <span className="whitespace-nowrap">Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </Button>
            </Link>
            
            <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                className="group h-14 sm:h-16 px-8 sm:px-10 rounded-xl border-2 border-border hover:border-primary/40 bg-white hover:bg-accent/50 font-semibold text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="whitespace-nowrap">Book a Strategy Call</span>
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 pt-4 text-xs sm:text-sm"
          >
            {[t('hero.noCommitment'), t('hero.strategySession'), t('hero.customProposal')].map((item, index) => (
              <span key={index} className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;