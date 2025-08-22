import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Star, TrendingUp, Users, Clock, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyBenefits = [
    "Save 15+ hours monthly",
    "99.9% accuracy guaranteed",
    "24-hour response time",
    "Free consultation included"
  ];

  const trustSignals = [
    { value: "500+", label: "Businesses Served" },
    { value: "15+", label: "Years Experience" },
    { value: "4.9/5", label: "Client Rating" }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden mt-16">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className={`inline-flex items-center space-x-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold">Trusted by 500+ Businesses</span>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium ml-2">4.9/5</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Expert Bookkeeping</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary-dark bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            {/* Simple, Clear Description */}
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At <span className="font-semibold text-foreground">ClearLedger Solutions</span>, we make your financial records clear and compliant. 
              <span className="block mt-2">Get organized books, save time, and focus on growing your business.</span>
            </p>
          </div>

          {/* Key Benefits - Simple Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground leading-tight">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Primary CTA - Single, Strong Button */}
          <div className={`mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#contact" className="inline-block">
              <Button size="lg" className="btn-primary text-xl px-12 py-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-3">No commitment • 30-minute session • Custom proposal</p>
          </div>

          {/* Simple Trust Signals */}
          <div className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{signal.value}</div>
                <div className="text-sm text-muted-foreground">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;