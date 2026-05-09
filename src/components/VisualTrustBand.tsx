import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, FileBarChart2, Briefcase } from 'lucide-react';
import dallasSkyline from '@/assets/dallas-skyline.jpg';
import teamCollab from '@/assets/team-collaboration.jpg';
import workspaceFlatlay from '@/assets/workspace-flatlay.jpg';

const cards = [
  {
    image: dallasSkyline,
    eyebrow: 'Local Expertise',
    title: 'Dallas-Fort Worth Roots',
    description: 'Headquartered in Texas with deep knowledge of local industries and the Texas Comptroller\'s requirements.',
    icon: MapPin,
    href: '/dallas-bookkeeping',
    cta: 'Dallas bookkeeping',
  },
  {
    image: teamCollab,
    eyebrow: 'Designed To Help',
    title: 'Clarity For Smarter Decisions',
    description: 'We build clean, organized books designed to support your decisions and your tax preparer — without the guesswork.',
    icon: FileBarChart2,
    href: '/services',
    cta: 'See our services',
  },
  {
    image: workspaceFlatlay,
    eyebrow: 'Built For Owners',
    title: 'Your Books, Quietly Handled',
    description: 'Monthly reconciliation, categorization, and reporting handled for you — so you can focus on running the business.',
    icon: Briefcase,
    href: '/monthly-management',
    cta: 'Monthly management',
  },
];

const VisualTrustBand = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Why ClearLedger
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground font-medium leading-tight">
            Bookkeeping that <span className="text-primary">works the way you do</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A boutique team of QuickBooks ProAdvisors helping business owners
            stay organized, informed, and ready for every conversation with their tax preparer or lender.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                  <card.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-foreground">
                    {card.eyebrow}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {card.description}
                </p>
                <Link
                  to={card.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualTrustBand;
