import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Shield, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import clearledgerHeroLogo from '@/assets/clearledger-hero-final.png';

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
      {/* Clean white background with subtle accent */}
      <div className="absolute inset-0 bg-white">
        {/* Subtle gradient accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        
        {/* Very subtle radial glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground">Trusted by 500+ Businesses</span>
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
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-foreground">
                <span className="block mb-1">Where Clarity</span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-[#a855f7] to-primary bg-clip-text text-transparent">
                    Meets Compliance
                  </span>
                  {/* Underline accent */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-[#a855f7] to-primary rounded-full origin-left"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl lg:max-w-2xl"
            >
              {t('hero.subtitle')}
              <span className="font-semibold text-foreground"> {t('hero.saveTime')}</span> {t('hero.description')}
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="premium"
                  className="group w-full text-sm md:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t('hero.cta')}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </Button>
              </Link>
              
              <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group w-full text-sm md:text-base"
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book a Strategy Call
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 md:gap-6 pt-1 sm:pt-2 text-[10px] sm:text-xs md:text-sm"
            >
              {[t('hero.noCommitment'), t('hero.strategySession'), t('hero.customProposal')].map((item, index) => (
                <span key={index} className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                  <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 5 columns - Hero Logo */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex items-center justify-center py-4 sm:py-6 lg:py-0">
            {/* Main Logo Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[640px]"
            >
              {/* Subtle glow effect */}
              <motion.div 
                animate={{ 
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -inset-x-16 -inset-y-16 bg-gradient-radial from-primary/12 via-primary/4 to-transparent rounded-full blur-3xl pointer-events-none"
              />
              
              {/* Floating animation for the logo */}
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={clearledgerHeroLogo} 
                  alt="ClearLedger Solutions - Where Clarity Meets Compliance" 
                  className="relative w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;