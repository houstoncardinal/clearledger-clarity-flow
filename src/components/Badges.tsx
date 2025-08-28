import { CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Badges = () => {
  const navigate = useNavigate();

  const handlePillClick = () => {
    // Navigate to consultation page
    navigate('/consultation');
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Luxury Badge */}
          <div 
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.16)] animate-fade-in sm:mx-auto group hover:scale-102 transition-all duration-300 cursor-pointer relative overflow-hidden"
            style={{animationDelay: '0.2s'}}
            onClick={handlePillClick}
          >
            {/* Luxury glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex space-x-1 relative z-10">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse shadow-sm"
                  style={{animationDelay: `${i * 0.15}s`}}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300 relative z-10">
              Transform Your Finances Today • Free Consultation
            </span>
          </div>

          {/* Banners Section */}
          <div 
            className="animate-fade-in"
            style={{animationDelay: '1s'}}
          >
            <div className="flex flex-col gap-2 justify-center items-center">
              {/* Individual Year Badges - Stacked Vertically with Minimal Spacing */}
              <div className="flex flex-col gap-0 items-center">
                <img 
                  src="/2024.jpg" 
                  alt="2024 Top 25 Up-N-Coming ProAdvisor Award" 
                  className="w-40 sm:w-48 lg:w-52 h-auto object-contain rounded-lg"
                />
                <img 
                  src="/2025.png" 
                  alt="2025 Top 25 Up-N-Coming ProAdvisor Award" 
                  className="w-36 sm:w-40 lg:w-48 h-auto object-contain rounded-lg -mt-6"
                />
              </div>
              
              {/* QuickBooks Banners - Adjusted Size for Better Balance */}
              <img 
                src="/banners.png" 
                alt="ClearLedger QuickBooks Certifications" 
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Trust Indicators */}
          <div 
            className="flex flex-wrap justify-start sm:justify-center gap-3 sm:gap-6 pt-6 border-t border-border/50 animate-fade-in"
            style={{animationDelay: '2s'}}
          >
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              <img src="/2024 Top 25 Up-N-Coming ProAdvisors Logo.jpg" alt="Top 25 Up-N-Coming ProAdvisor Badge" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
              <span className="text-left sm:text-center">2024 & 2025 Top 25 Up-N-Coming ProAdvisor</span>
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

export default Badges; 