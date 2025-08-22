import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '500+', label: 'Businesses Served' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '24h', label: 'Response Time' },
    { value: '15+', label: 'Years Experience' }
  ];

  const keyPoints = [
    'QuickBooks Online & Desktop Expertise',
    'Monthly Management & Reconciliation',
    'Payroll & HR Support',
    'Secure & Compliant'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-primary-dark rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Trusted by 500+ Businesses
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Clarity Meets{' '}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Compliance
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Outsourced QuickBooks bookkeeping, payroll, reconciliation, and HR — 
                monthly management you can trust.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary group">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                Request Pricing
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl p-8 shadow-premium">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold">
                    Monthly Financial Summary
                  </h3>
                  <div className="flex items-center space-x-2 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+12.5%</span>
                  </div>
                </div>
                
                {/* Chart Visual */}
                <div className="h-48 bg-gradient-subtle rounded-lg flex items-end justify-center space-x-2 p-4">
                  {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-primary rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%`, width: '20px' }}
                    ></div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="font-bold text-lg text-accent-foreground">$124K</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-bold text-lg text-foreground">98.5%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-accent rounded-lg">
                    <div className="font-bold text-lg text-accent-foreground">15h</div>
                    <div className="text-xs text-muted-foreground">Saved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-dark rounded-full opacity-15 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;