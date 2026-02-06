import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Shield,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Client A',
      title: 'CEO & Founder',
      company: 'Tech Solutions Inc.',
      companySize: '25 employees',
      industry: 'SaaS',
      rating: 5,
      content: 'ClearLedger transformed our financial management. Their team\'s expertise in QuickBooks and attention to detail has saved us countless hours. We\'ve seen a 40% improvement in our month-end close process.',
      results: ['40% faster month-end close', 'Eliminated manual reconciliation', 'Improved cash flow visibility'],
      avatar: 'CA',
      featured: true
    },
    {
      name: 'Client B',
      title: 'Operations Director',
      company: 'Construction Co.',
      companySize: '45 employees',
      industry: 'Construction',
      rating: 5,
      content: 'The bookkeeping and compliance support has been exceptional. ClearLedger handles everything from processing to compliance, giving us peace of mind. Their response time is incredible - always under 24 hours.',
      results: ['Streamlined bookkeeping process', 'Zero compliance issues', '24h response guarantee met'],
      avatar: 'CB'
    },
    {
      name: 'Client C',
      title: 'CFO',
      company: 'Healthcare Partners',
      companySize: '120 employees',
      industry: 'Healthcare',
      rating: 5,
      content: 'As a healthcare provider, compliance is critical. ClearLedger\'s expertise in regulatory requirements gives us confidence that our financial data is compliant and well-managed.',
      results: ['100% compliance maintained', 'Reduced audit preparation time', 'Improved financial clarity'],
      avatar: 'CC'
    }
  ];

  const stats = [
    { value: '100%', label: 'Compliance Rate', icon: Shield },
    { value: '15+', label: 'Industries Served', icon: Users },
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '24h', label: 'Response Time', icon: TrendingUp }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-white/90">
              Client Success Stories
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-5">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Growing Businesses
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            See how ClearLedger has transformed financial management for businesses across 
            15+ industries, helping them achieve clarity, compliance, and growth.
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300 border border-white/10">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Featured Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            {/* Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-y-32 translate-x-32 blur-2xl" />
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                <Quote className="w-7 h-7 text-white" />
              </div>

              <div className="grid lg:grid-cols-3 gap-10 items-center">
                <div className="lg:col-span-2">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 italic">
                    "{current.content}"
                  </blockquote>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {current.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-white/90 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                      {current.avatar}
                    </div>
                    <div>
                      <div className="font-heading text-lg font-semibold text-white">
                        {current.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {current.title} at {current.company}
                      </div>
                      <div className="text-xs text-white/40">
                        {current.companySize} • {current.industry}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-row lg:flex-col items-center justify-center lg:justify-start gap-6">
                  <div className="text-center">
                    <div className="text-sm text-white/50 mb-1">Testimonial</div>
                    <div className="font-heading text-2xl font-bold text-white">
                      {currentTestimonial + 1} <span className="text-white/40">/ {testimonials.length}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-xl bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-xl bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {current.featured && (
                    <div className="bg-gradient-to-r from-primary to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/20">
                      Featured Story
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-heading text-2xl font-semibold text-white">
              More Success Stories
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-white/80 mb-6 italic leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-white/50">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-white rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-primary/10 shadow-[0_8px_60px_-12px_rgba(203,108,230,0.2)]"
        >
          {/* Glow Effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/20 via-pink-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-400/15 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          {/* Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Start Your Journey
            </span>
            
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule your free consultation today and discover how ClearLedger can 
              transform your financial management.
            </p>
            
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] hover:bg-right text-white font-semibold px-8 py-6 rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 text-base"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;