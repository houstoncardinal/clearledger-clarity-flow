import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar, Shield, CheckCircle2, Award, TrendingUp, Users, Zap, Building2, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Hero = () => {
  const { t } = useLanguage();

  const features = [
    { label: 'QuickBooks Certified', icon: Award },
    { label: 'Monthly Management', icon: TrendingUp },
    { label: 'Payroll Processing', icon: Users },
    { label: 'Financial Reporting', icon: CheckCircle2 }
  ];

  const highlights = [
    { icon: Building2, title: 'Enterprise Solutions', description: 'Scalable financial management' },
    { icon: FileCheck, title: 'Full Compliance', description: 'Industry-standard practices' },
    { icon: Zap, title: 'Dedicated Support', description: 'Expert guidance always' }
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Gradient base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated background paths */}
      <BackgroundPaths />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40 pointer-events-none" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto">
          
          {/* Two-column layout on larger screens */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Main content - left side */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              
              {/* Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg shadow-primary/5">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"
                  />
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Trusted by Businesses Nationwide</span>
                  <div className="hidden sm:block h-4 w-px bg-border/50" />
                  <span className="hidden sm:block text-xs text-muted-foreground font-medium">Est. 2014</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-foreground font-medium">
                  <span className="block mb-1">Where Clarity</span>
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] bg-clip-text text-transparent whitespace-nowrap">
                    Meets Compliance
                  </span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {t('hero.subtitle')}
                <span className="font-semibold text-foreground"> {t('hero.saveTime')}</span> {t('hero.description')}
              </motion.p>

              {/* Feature Pills */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 group cursor-default"
                  >
                    <feature.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{feature.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="group w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground font-semibold text-base sm:text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                    <span className="whitespace-nowrap">Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                  </Button>
                </Link>
                
                <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="group w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-2xl border-2 border-border/80 hover:border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/5 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-primary" />
                    <span className="whitespace-nowrap">Book a Strategy Call</span>
                  </Button>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 pt-2 text-sm"
              >
                {[t('hero.noCommitment'), t('hero.strategySession'), t('hero.customProposal')].map((item, index) => (
                  <span key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Enterprise card - right side (desktop only) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block lg:col-span-5"
            >
              <div className="relative">
                {/* Subtle glow effect behind card */}
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 rounded-[2rem] blur-3xl opacity-50" />
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-border/40 rounded-[1.5rem] overflow-hidden shadow-2xl">
                  {/* Card header with gradient accent */}
                  <div className="relative px-8 pt-8 pb-6">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-80" />
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20">
                        <TrendingUp className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">ClearLedger</h3>
                        <p className="text-sm text-muted-foreground">Financial Excellence</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Highlights list */}
                  <div className="px-8 pb-6 space-y-4">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 border border-border/30 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Card footer */}
                  <div className="px-8 py-5 bg-muted/20 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm text-muted-foreground">QuickBooks ProAdvisor</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-primary">Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Mobile highlights - shown only on smaller screens */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:hidden mt-10 sm:mt-12"
          >
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-background/90 backdrop-blur-sm border border-border/40 shadow-lg"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs font-medium text-foreground leading-tight">
                    {item.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
