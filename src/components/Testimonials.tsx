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
  Award
} from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO & Founder',
      company: 'TechFlow Solutions',
      companySize: '25 employees',
      industry: 'SaaS',
      rating: 5,
      content: 'ClearLedger transformed our financial management. Their team\'s expertise in QuickBooks and attention to detail has saved us countless hours. We\'ve seen a 40% improvement in our month-end close process.',
      results: ['40% faster month-end close', 'Eliminated manual reconciliation', 'Improved cash flow visibility'],
      avatar: 'SC',
      featured: true
    },
    {
      name: 'Michael Rodriguez',
      title: 'Operations Director',
      company: 'GreenBuild Construction',
      companySize: '45 employees',
      industry: 'Construction',
      rating: 5,
      content: 'The bookkeeping and compliance support has been exceptional. ClearLedger handles everything from processing to compliance, giving us peace of mind. Their response time is incredible - always under 24 hours.',
      results: ['Streamlined bookkeeping process', 'Zero compliance issues', '24h response guarantee met'],
      avatar: 'MR'
    },
    {
      name: 'Lisa Thompson',
      title: 'CFO',
      company: 'HealthFirst Medical',
      companySize: '120 employees',
      industry: 'Healthcare',
      rating: 5,
      content: 'As a healthcare provider, compliance is critical. ClearLedger\'s expertise in regulatory requirements gives us confidence that our financial data is compliant and well-managed.',
      results: ['100% compliance maintained', 'Reduced audit preparation time', 'Improved financial clarity'],
      avatar: 'LT'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: 'Various', label: 'Industries Served', icon: Users },
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
    <section className="py-20 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full mb-8">
            <Star className="w-5 h-5 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">
              Client Success Stories
            </span>
          </div>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Various Industries
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See how ClearLedger has transformed financial management for businesses across 
            various industries, helping them achieve clarity, compliance, and growth.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="font-heading text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <div className="bg-card rounded-3xl p-12 shadow-2xl border border-border/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-primary-dark/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-accent/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-2xl flex items-center justify-center mb-8">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Testimonial Content */}
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-8 italic">
                    "{current.content}"
                  </blockquote>

                  {/* Results */}
                  <div className="space-y-3 mb-8">
                    {current.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {current.avatar}
                    </div>
                    <div>
                      <div className="font-heading text-xl font-bold text-foreground">
                        {current.name}
                      </div>
                      <div className="text-muted-foreground">
                        {current.title} at {current.company}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {current.companySize} • {current.industry}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center space-y-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Testimonial</div>
                    <div className="font-heading text-2xl font-bold text-foreground">
                      {currentTestimonial + 1} of {testimonials.length}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-xl hover:bg-accent/50"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-xl hover:bg-accent/50"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Featured Badge */}
                  {current.featured && (
                    <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Story
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground">
              More Success Stories
            </h3>
            <Button variant="outline" className="btn-secondary">
              View All Testimonials
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-service group hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-3xl p-12 text-center">
          <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover how ClearLedger can 
            transform your financial management and help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 