import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Shield, Star, TrendingUp, Users, Clock, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate stats
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const keyBenefits = [
    "Professional QuickBooks Expertise",
    "Monthly Reconciliation & Reporting",
    "Payroll & Tax Compliance",
    "Strategic Financial Guidance"
  ];

  const stats = [
    { value: "500+", label: "Businesses Served", icon: Users, color: "text-blue-500" },
    { value: "99.9%", label: "Accuracy Rate", icon: Award, color: "text-green-500" },
    { value: "24h", label: "Response Time", icon: Clock, color: "text-purple-500" },
    { value: "15+", label: "Years Experience", icon: TrendingUp, color: "text-orange-500" }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden mt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Trust Badge */}
              <div className={`inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 px-6 py-3 rounded-full transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">Trusted by 500+ Businesses</span>
                </div>
                <div className="flex items-center space-x-1 ml-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-primary ml-2 font-medium">4.9/5</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Expert</span>
                  <span className="block bg-gradient-to-r from-primary via-primary to-primary-dark bg-clip-text text-transparent animate-gradient-x">
                    Bookkeeping
                  </span>
                  <span className="text-foreground">Services</span>
                </h1>
                
                {/* Professional Description */}
                <div className="space-y-3">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    At <span className="font-semibold text-foreground">ClearLedger Solutions</span>, we specialize in providing accurate, reliable, and transparent bookkeeping services tailored to small businesses and entrepreneurs.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    With our motto, <span className="italic text-primary font-medium">"Where Clarity Meets Compliance,"</span> we're committed to making your financial records easy to understand while ensuring full adherence to the latest regulations.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Whether you're managing day-to-day expenses, need monthly maintenance for your business accounts, or just need assistance with the annual work at the end of the year, our expert team brings peace of mind through organized, compliant financial reporting.
                  </p>
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className={`grid grid-cols-2 gap-3 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {keyBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-3 p-3 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a href="#contact" className="group">
                  <Button size="lg" className="btn-primary text-lg px-8 py-5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
                <a href="#services" className="group">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-5 border-2 hover:border-primary hover:bg-primary/5 transform hover:-translate-y-1 transition-all duration-300">
                    Explore Services
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Interactive Stats & Visual Elements */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              
              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  const isActive = index === activeStat;
                  
                  return (
                    <div 
                      key={index}
                      className={`group relative p-4 rounded-xl border transition-all duration-500 cursor-pointer ${
                        isActive 
                          ? 'border-primary bg-primary/10 shadow-lg scale-105' 
                          : 'border-border hover:border-primary/30 hover:bg-accent/5'
                      }`}
                      onClick={() => setActiveStat(index)}
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-br from-primary/20 to-accent/20' 
                          : 'bg-transparent'
                      }`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-500 ${
                          isActive 
                            ? 'bg-primary text-primary-foreground scale-110' 
                            : 'bg-primary/10 text-primary group-hover:scale-105'
                        }`}>
                          <IconComponent className={`w-5 h-5 transition-all duration-500 ${
                            isActive ? 'rotate-12' : 'group-hover:rotate-6'
                          }`} />
                        </div>
                        
                        <div className={`text-2xl font-bold mb-1 transition-all duration-500 ${
                          isActive ? 'text-primary scale-110' : 'text-foreground'
                        }`}>
                          {stat.value}
                        </div>
                        
                        <div className={`text-xs transition-all duration-500 ${
                          isActive ? 'text-primary font-medium' : 'text-muted-foreground'
                        }`}>
                          {stat.label}
                        </div>
                      </div>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <h3 className="font-semibold text-foreground mb-3 text-center text-sm">Why Choose ClearLedger?</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Monthly reconciliation & reporting</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">QuickBooks ProAdvisor certified</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Full compliance guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">Dedicated account manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;