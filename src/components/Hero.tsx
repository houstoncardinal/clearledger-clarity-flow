import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';

const Hero = () => {
  const keyBenefits = [
    'QuickBooks Online & Desktop Expertise',
    'Monthly Bookkeeping & Reconciliation',
    'Accounts Payable Management',
    'Compliant Financial Reporting'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-accent/10">
      {/* Subtle background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-left sm:text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Trust Badge */}
          <div 
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent-foreground/20 shadow-sm animate-fade-in sm:mx-auto"
            style={{animationDelay: '0.2s'}}
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 animate-bounce" 
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">
              Expert Bookkeeping Services • 4.9/5 Rating
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <h1 
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight animate-slide-up"
              style={{animationDelay: '0.4s'}}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                ClearLedger Solutions
              </span>
            </h1>
            
            <h2 
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground animate-slide-up"
              style={{animationDelay: '0.6s'}}
            >
              Where Clarity Meets Compliance
            </h2>
            
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto sm:mx-auto px-4 sm:px-0 animate-fade-in"
              style={{animationDelay: '0.8s'}}
            >
              Expert bookkeeping services tailored to small businesses and entrepreneurs. 
              <span className="font-semibold text-foreground"> Save 15+ hours per month</span> with our transparent, compliant financial reporting.
            </p>
          </div>

          {/* Key Benefits */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto sm:mx-auto px-4 sm:px-0 animate-fade-in"
            style={{animationDelay: '1s'}}
          >
            {keyBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div 
            className="space-y-4 animate-fade-in px-4 sm:px-0 sm:text-center"
            style={{animationDelay: '1.6s'}}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="btn-primary text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 shadow-xl hover:shadow-2xl group hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Get Started Today - Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <p className="text-xs sm:text-sm text-muted-foreground">
              No commitment • 30-minute strategy session • Custom proposal within 24 hours
            </p>
          </div>

          {/* Trust Indicators */}
          <div 
            className="flex flex-wrap justify-start sm:justify-center gap-3 sm:gap-6 pt-6 border-t border-border/50 animate-fade-in px-4 sm:px-0"
            style={{animationDelay: '1.8s'}}
          >
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-left sm:text-center">2024-2025 Top 25 Up-N-Coming ProAdvisor</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-left sm:text-center">QuickBooks ProAdvisor Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-left sm:text-center">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;