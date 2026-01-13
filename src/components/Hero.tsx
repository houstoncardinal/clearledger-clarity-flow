import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, ChevronDown, Award, Users, Clock, Shield, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const floatingStats = [
    { icon: Users, value: '500+', label: 'Clients Served', delay: 0.8 },
    { icon: Clock, value: '10+', label: 'Years Experience', delay: 0.9 },
    { icon: Award, value: '99%', label: 'Retention Rate', delay: 1.0 },
  ];

  const features = [
    'QuickBooks Certified',
    'Monthly Management',
    'Payroll Processing',
    'Financial Reporting'
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
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
            className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-[120px]" />
          </motion.div>
          
          {/* Secondary orb - bottom left */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, -60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-[100px]" />
          </motion.div>

          {/* Accent orb - center */}
          <motion.div 
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-[80px]" />
          </motion.div>
        </motion.div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Trusted by 500+ Businesses Nationwide</span>
                <div className="h-4 w-px bg-border" />
                <span className="text-xs text-muted-foreground font-medium">Est. 2014</span>
              </div>
            </motion.div>

            {/* Main Headline with Animated Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight">
                <span className="block text-foreground mb-2">Where Clarity</span>
                <span className="relative inline-block">
                  <span className="text-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-primary via-primary-light to-primary">
                    Meets Compliance
                  </span>
                  {/* Underline accent */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full origin-left"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t('hero.subtitle')}
              <span className="font-semibold text-foreground"> {t('hero.saveTime')}</span> {t('hero.description')}
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="relative overflow-hidden text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl font-semibold group w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-primary-dark text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
              </Link>
              
              <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl font-semibold group w-full sm:w-auto border-2 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book a Strategy Call
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-sm"
            >
              {[t('hero.noCommitment'), t('hero.strategySession'), t('hero.customProposal')].map((item, index) => (
                <span key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>{item}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 5 columns - Logo Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 -m-12 pointer-events-none">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px]"
              >
                <div className="absolute inset-0 rounded-full border border-primary/10" />
                <div className="absolute inset-4 rounded-full border border-dashed border-primary/5" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[420px] lg:h-[420px]"
              >
                <div className="absolute inset-0 rounded-full border border-primary/15" />
              </motion.div>
            </div>

            {/* Main Logo Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-[2rem] blur-3xl scale-90 opacity-50" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-xl border border-border/60 rounded-[2rem] p-10 lg:p-14 shadow-2xl">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  src="/logo.png" 
                  alt="ClearLedger Solutions Logo" 
                  className="relative w-full max-w-md mx-auto h-auto object-contain drop-shadow-lg"
                />
              </div>
            </motion.div>

            {/* Floating Stat Cards */}
            {floatingStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`absolute bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                  index === 0 
                    ? '-left-6 top-4 lg:-left-10 lg:top-8' 
                    : index === 1 
                    ? '-right-4 top-1/2 -translate-y-1/2 lg:-right-8' 
                    : 'left-1/2 -translate-x-1/2 -bottom-6 lg:-bottom-10'
                }`}
              >
                {/* Card glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-2xl lg:text-3xl text-gradient">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
