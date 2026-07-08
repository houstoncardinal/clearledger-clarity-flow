import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Shield, CheckCircle2, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import heroWorkspace from '@/assets/hero-workspace.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const trustPoints = [
    t('hero.noCommitment') || 'No commitment required',
    t('hero.strategySession') || 'Free 30-min strategy session',
    t('hero.customProposal') || 'Custom proposal in 24 hours',
  ];

  return (
    <section className="relative min-h-[92svh] lg:min-h-[100svh] flex items-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroWorkspace}
          alt="Modern small business workspace with laptop showing financial charts, ledger, and coffee"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Left-to-right gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Subtle brand tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent mix-blend-multiply" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-background/70 backdrop-blur-md border border-primary/20 shadow-sm mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              Award-Winning QuickBooks ProAdvisor
            </span>
            <div className="hidden sm:flex items-center gap-0.5 pl-2 border-l border-border/60">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display font-medium tracking-tight text-foreground text-[2.5rem] sm:text-6xl lg:text-7xl leading-[1.05]">
            <span className="block">Where Clarity</span>
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] bg-clip-text text-transparent">
              Meets Compliance.
            </span>
          </h1>

          {/* Subheadline — single, focused sentence */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Premium bookkeeping and QuickBooks expertise for small businesses and entrepreneurs — so you can stop chasing your books and start growing your company.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground font-semibold text-base shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:brightness-110 transition-all duration-300"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <a
              href="https://calendly.com/jj-yourclearledger"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto h-14 px-8 rounded-xl border-2 border-border bg-background/80 backdrop-blur-md hover:bg-background hover:border-primary/40 font-semibold text-base transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                <span>Book a Strategy Call</span>
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {trustPoints.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
