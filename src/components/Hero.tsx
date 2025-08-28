import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const Hero = () => {
  const keyBenefits = [
    'QuickBooks Online & Desktop Expertise',
    'Monthly Bookkeeping & Reconciliation',
    'Accounts Payable Management',
    'Compliant Financial Reporting'
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-white">
      {/* Clean white background - no patterns or gradients */}
      
      <div className="container mx-auto py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-left sm:text-center space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Main Logo */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div 
              className="animate-slide-up flex justify-center"
              style={{animationDelay: '0.4s'}}
            >
              <img 
                src="/logo.png" 
                alt="ClearLedger Solutions Logo" 
                className="w-64 sm:w-80 lg:w-96 xl:w-[28rem] h-auto object-contain"
              />
            </div>
            
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto sm:mx-auto animate-fade-in"
              style={{animationDelay: '0.8s'}}
            >
              Expert bookkeeping services tailored to small businesses and entrepreneurs. 
              <span className="font-semibold text-foreground"> Save 15+ hours per month</span> with our transparent, compliant financial reporting.
            </p>
          </div>

          {/* Key Benefits */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto sm:mx-auto animate-fade-in"
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
            className="space-y-4 animate-fade-in sm:text-center"
            style={{animationDelay: '1.6s'}}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="btn-primary text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 shadow-xl hover:shadow-2xl group hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Get Started Today - Free Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="btn-secondary text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 shadow-xl hover:shadow-2xl group hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  📅 Book Directly
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground">
              No commitment • 30-minute strategy session • Custom proposal within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;