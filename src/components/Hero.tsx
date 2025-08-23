import { Button } from '@/components/ui/button';
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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-3 bg-accent px-6 py-3 rounded-full border border-accent-foreground/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-accent-foreground">
              Expert Bookkeeping Services • 4.9/5 Rating
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                ClearLedger Solutions
              </span>
            </h1>
            
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Where Clarity Meets Compliance
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Expert bookkeeping services tailored to small businesses and entrepreneurs. 
              <span className="font-semibold text-foreground"> Save 15+ hours per month</span> with our transparent, compliant financial reporting.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="btn-primary text-xl px-12 py-6 shadow-xl hover:shadow-2xl text-lg"
            >
              Get Started Today - Free Consultation
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              No commitment • 30-minute strategy session • Custom proposal within 24 hours
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border/50">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>2024-2025 Top 25 Up-N-Coming ProAdvisor</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>QuickBooks ProAdvisor Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-primary" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;