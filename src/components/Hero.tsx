import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Shield, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logo3DRender from '@/assets/logo-3d-render.png';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    'QuickBooks Certified',
    'Monthly Management',
    'Payroll Processing',
    'Financial Reporting'
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Premium Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
        
        {/* Animated mesh gradient */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          {/* Primary orb - top right */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[400px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-[80px] sm:blur-[100px] md:blur-[120px]" />
          </motion.div>
          
          {/* Secondary orb - bottom left */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, -60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[350px] sm:w-[500px] md:w-[650px] lg:w-[800px] h-[350px] sm:h-[500px] md:h-[650px] lg:h-[800px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-[60px] sm:blur-[80px] md:blur-[100px]" />
          </motion.div>

          {/* Accent orb - center */}
          <motion.div 
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-[40px] sm:blur-[60px] md:blur-[80px]" />
          </motion.div>
        </motion.div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5">
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

            {/* Main Headline with Animated Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95] tracking-tight">
                <span className="block text-foreground mb-1">Where Clarity</span>
                <span className="relative inline-block">
                  <span className="text-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-primary via-primary-light to-primary">
                    Meets Compliance
                  </span>
                  {/* Underline accent */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-0 right-0 h-0.5 sm:h-[3px] md:h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full origin-left"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-xl lg:max-w-2xl"
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
                  className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
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
                  className="relative overflow-hidden text-xs sm:text-sm md:text-base h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl font-semibold group w-full bg-gradient-to-r from-primary via-primary to-primary-dark text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t('hero.cta')}
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
              </Link>
              
              <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-xs sm:text-sm md:text-base h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl font-semibold group w-full border-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
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

          {/* Right Side - 5 columns - 3D Logo Render */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex items-center justify-center">
            {/* Main 3D Logo Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px]"
            >
              {/* Multi-layered glow effects */}
              <div className="absolute inset-0 scale-110">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
                />
              </div>
              
              {/* Secondary glow ring */}
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 scale-105"
              >
                <div className="absolute inset-0 bg-gradient-conic from-primary/30 via-transparent to-primary/30 rounded-full blur-[60px] opacity-50" />
              </motion.div>
              
              {/* Floating animation for the 3D logo */}
              <motion.div
                animate={{ 
                  y: [-12, 12, -12],
                  rotateY: [-3, 3, -3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={logo3DRender} 
                  alt="ClearLedger Solutions 3D logo - professional bookkeeping and financial growth" 
                  className="relative w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(203,108,230,0.4)]"
                />
              </motion.div>

              {/* Subtle particle effects */}
              <motion.div
                animate={{ 
                  y: [-20, 20],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-2 h-2 rounded-full bg-primary/60 blur-[2px]"
              />
              <motion.div
                animate={{ 
                  y: [15, -15],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-12 w-3 h-3 rounded-full bg-primary/50 blur-[3px]"
              />
              <motion.div
                animate={{ 
                  x: [-10, 10],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/3 left-6 w-1.5 h-1.5 rounded-full bg-primary/70 blur-[1px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;