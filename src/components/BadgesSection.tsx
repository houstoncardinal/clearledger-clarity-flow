import { Award } from 'lucide-react';

const BadgesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Awards & Certifications
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Recognized Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality and expertise has been recognized with prestigious industry awards and certifications.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8">
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
            
            {/* QuickBooks Banners */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50">
              <img 
                src="/banners.png" 
                alt="ClearLedger QuickBooks Certifications" 
                className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Certification Details */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/top25badge.jpg" 
                alt="Top 25 Up-N-Coming ProAdvisor Badge" 
                className="w-12 h-12 mx-auto mb-4 object-contain"
              />
              <h4 className="font-medium text-foreground text-sm leading-tight">2024 & 2025 Top 25 Up-N-Coming ProAdvisor</h4>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-medium text-foreground text-sm leading-tight">QuickBooks Online Advanced Certified ProAdvisor</h4>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-medium text-foreground text-sm leading-tight">QuickBooks Desktop Certified ProAdvisor</h4>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-medium text-foreground text-sm leading-tight">QuickBooks Desktop Enterprise Certified</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgesSection; 