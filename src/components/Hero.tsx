import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  HardHat,
  Building2,
  Stethoscope,
  Cpu,
  Star,
  Shield,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroRestaurant from '@/assets/hero-restaurant.jpg';
import heroConstruction from '@/assets/hero-construction.jpg';
import heroRealEstate from '@/assets/hero-realestate.jpg';
import heroMedical from '@/assets/hero-medical.jpg';
import heroTechnology from '@/assets/hero-technology.jpg';

type Slide = {
  key: string;
  industry: string;
  eyebrow: string;
  headline: string;
  accent: string;
  subtitle: string;
  metrics: { value: string; label: string }[];
  image: string;
  href: string;
  icon: React.ElementType;
};

const slides: Slide[] = [
  {
    key: 'restaurant',
    industry: 'Restaurants',
    eyebrow: 'Hospitality & Food Service',
    headline: 'Bookkeeping for',
    accent: 'restaurants that run tight margins.',
    subtitle:
      'Daily sales reconciliation, tip tracking, food & labor cost analysis, and multi-location P&Ls — so you know your true profit per plate, not just what the POS says.',
    metrics: [
      { value: 'Daily', label: 'Sales sync' },
      { value: 'COGS', label: 'Prime cost tracking' },
      { value: '1099s', label: 'Compliant vendor 1099s' },
    ],
    image: heroRestaurant,
    href: '/restaurant-bookkeeping',
    icon: UtensilsCrossed,
  },
  {
    key: 'construction',
    industry: 'Construction',
    eyebrow: 'Trades & Contracting',
    headline: 'Job-costing built for',
    accent: 'contractors who chase margins, not receipts.',
    subtitle:
      'Job costing, WIP schedules, retainage, and subcontractor 1099 compliance — accurate books at the job level, so bids and change orders reflect reality.',
    metrics: [
      { value: 'WIP', label: 'Real-time job costing' },
      { value: 'AIA', label: 'Progress billing' },
      { value: 'Sub', label: '1099 compliance' },
    ],
    image: heroConstruction,
    href: '/construction-bookkeeping',
    icon: HardHat,
  },
  {
    key: 'realestate',
    industry: 'Real Estate',
    eyebrow: 'Investors, Agents & Property Managers',
    headline: 'Clean books for',
    accent: 'real estate professionals.',
    subtitle:
      'Property-level P&Ls, commission tracking, trust account discipline, and depreciation strategy — books that hold up to lenders, partners, and the IRS.',
    metrics: [
      { value: 'Per-Property', label: 'P&L reporting' },
      { value: 'Trust', label: 'Escrow accuracy' },
      { value: 'Basis', label: 'Depreciation ready' },
    ],
    image: heroRealEstate,
    href: '/real-estate-bookkeeping',
    icon: Building2,
  },
  {
    key: 'medical',
    industry: 'Medical & Dental',
    eyebrow: 'Private Practices & Clinics',
    headline: 'Compliant bookkeeping for',
    accent: 'medical and dental practices.',
    subtitle:
      'Insurance reimbursement reconciliation, provider comp modeling, and clean books for lenders and buyers — designed for the way modern practices actually earn.',
    metrics: [
      { value: 'Payer', label: 'Reimbursement recon' },
      { value: 'Provider', label: 'Compensation clarity' },
      { value: 'HIPAA', label: 'Aware workflows' },
    ],
    image: heroMedical,
    href: '/medical-bookkeeping',
    icon: Stethoscope,
  },
  {
    key: 'technology',
    industry: 'Technology & SaaS',
    eyebrow: 'Startups, Agencies & SaaS',
    headline: 'Investor-ready books for',
    accent: 'technology companies.',
    subtitle:
      'MRR/ARR tracking, deferred revenue, R&D categorization, and burn visibility — financials your board, bank, and next round will actually trust.',
    metrics: [
      { value: 'MRR/ARR', label: 'Subscription metrics' },
      { value: 'Deferred', label: 'Revenue done right' },
      { value: 'Burn', label: 'Runway visibility' },
    ],
    image: heroTechnology,
    href: '/technology-bookkeeping',
    icon: Cpu,
  },
];

const AUTO_MS = 7000;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = slides[index];

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), AUTO_MS);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0a0612] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Industries we serve"
    >
      {/* Slide backgrounds */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active.key}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={active.image}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1280}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0612] via-[#0a0612]/85 to-[#0a0612]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-transparent to-[#0a0612]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.18),transparent_55%)]" />

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-40 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <Shield className="w-3.5 h-3.5 text-purple-300" />
                <span className="text-xs font-semibold tracking-wide">
                  Award-Winning QuickBooks ProAdvisor
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-medium text-white/80 ml-1">4.9 · 99% retention</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Industry eyebrow */}
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-700/10 border border-purple-400/30 flex items-center justify-center backdrop-blur-md">
                    <active.icon className="w-5 h-5 text-purple-200" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-purple-300/80 font-semibold">
                      {active.eyebrow}
                    </div>
                    <div className="text-sm text-white/70 font-medium">{active.industry}</div>
                  </div>
                </div>

                {/* Headline */}
                <h1 className="font-display font-medium tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.05]">
                  {active.headline}{' '}
                  <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 bg-[length:200%_auto] animate-[gradient_5s_linear_infinite] bg-clip-text text-transparent">
                    {active.accent}
                  </span>
                </h1>

                {/* Subhead */}
                <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                  {active.subtitle}
                </p>

                {/* Metrics */}
                <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                  {active.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-3"
                    >
                      <div className="font-heading text-base sm:text-lg font-semibold text-white">
                        {m.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-white/60 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto h-14 px-8 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 text-white font-semibold text-base shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(168,85,247,0.8)] hover:brightness-110 transition-all duration-300 border-0"
                >
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={active.href} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto h-14 px-8 rounded-xl bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white font-semibold text-base transition-all duration-300"
                >
                  Explore {active.industry}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://calendly.com/jj-yourclearledger"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 h-14 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <Calendar className="w-4 h-4 text-purple-300" />
                Book a strategy call
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              {['No commitment', 'Free 30-min strategy session', 'Custom proposal in 24 hours'].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right visual gap — the background image itself carries the visual on the right */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" aria-hidden="true" />
        </div>
      </div>

      {/* Industry navigator */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="container px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-2 flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous industry"
              className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-xl items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-stretch gap-1.5 min-w-max">
                {slides.map((s, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setIndex(i)}
                      aria-label={`Show ${s.industry}`}
                      aria-current={isActive}
                      className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? 'bg-white/10 text-white shadow-inner'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <s.icon className={`w-4 h-4 ${isActive ? 'text-purple-300' : ''}`} />
                      {s.industry}
                      {isActive && (
                        <motion.span
                          key={`${s.key}-${paused ? 'p' : 'r'}`}
                          initial={{ width: '0%' }}
                          animate={{ width: paused ? '0%' : '100%' }}
                          transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: 'linear' }}
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next industry"
              className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-xl items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-white/40">
            <Link to="/industries" className="underline underline-offset-4 hover:text-white/70">
              See all 10+ industries we serve →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
