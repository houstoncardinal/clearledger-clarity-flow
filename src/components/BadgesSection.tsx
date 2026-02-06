import { Award, Shield, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const BadgesSection = () => {
  const certifications = [
    {
      icon: Award,
      title: 'QuickBooks Online Advanced',
      subtitle: 'Certified ProAdvisor'
    },
    {
      icon: Shield,
      title: 'QuickBooks Desktop',
      subtitle: 'Certified ProAdvisor'
    },
    {
      icon: CheckCircle,
      title: 'QuickBooks Enterprise',
      subtitle: 'Certified Specialist'
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30" />
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full mb-6 border border-primary/20 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Industry Recognition
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-5">
            Award-Winning Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our dedication to quality bookkeeping has earned us prestigious industry recognition and certifications.
          </p>
        </motion.div>

        {/* Awards Display - Premium Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-primary/10 shadow-[0_8px_60px_-12px_rgba(203,108,230,0.15)]">
            {/* Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Award Badges */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-300/20 rounded-2xl blur-xl" />
                  <img 
                    src="/2024.jpg" 
                    alt="2024 Top 25 Up-N-Coming ProAdvisor Award" 
                    className="relative w-44 md:w-52 h-auto object-contain rounded-xl"
                  />
                </div>
                <div className="relative -mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-300/20 rounded-2xl blur-xl" />
                  <img 
                    src="/2025.png" 
                    alt="2025 Top 25 Up-N-Coming ProAdvisor Award" 
                    className="relative w-40 md:w-48 h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden lg:block w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="lg:hidden w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              {/* QuickBooks Certifications */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100">
                  <img 
                    src="/banners.png" 
                    alt="ClearLedger QuickBooks Certifications" 
                    className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground font-medium">
                  Certified across all QuickBooks platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group text-center p-6 bg-white rounded-2xl border border-primary/10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BadgesSection;