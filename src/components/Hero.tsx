import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';

const Hero = () => {
  const keyBenefits = [
    'QuickBooks Online & Desktop Expertise',
    'Monthly Bookkeeping & Reconciliation',
    'Payroll & HR Support',
    'Secure & Compliant'
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-gradient-to-br from-background via-background to-accent/10 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16 flex flex-col justify-center min-h-[70vh]">
          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 500+ Businesses</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="font-heading text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight">
              Expert Bookkeeping
              <span className="block text-primary">Services</span>
            </h1>
            
            {/* Client's Professional Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                At ClearLedger Solutions, we specialize in providing accurate, reliable, and transparent bookkeeping services tailored to small businesses and entrepreneurs. With our motto, "Where Clarity Meets Compliance," we're committed to making your financial records easy to understand while ensuring full adherence to the latest regulations.
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mt-4">
                Whether you're managing day-to-day expenses, need monthly maintenance for your business accounts, or just need assistance with the annual work at the end of the year, our expert team brings peace of mind through organized, compliant financial reporting.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block">
              <Button size="lg" className="btn-primary text-lg px-8 py-6">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#services" className="inline-block">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Our Services
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 pb-12 border-t border-border/50">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>99.9% Accuracy Rate</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>24-Hour Response Time</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>500+ Businesses Served</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Full Compliance Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;