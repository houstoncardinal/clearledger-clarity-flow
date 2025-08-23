import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  FileText,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const certifications = [
    { name: '2024-2025 Top 25 Up-N-Coming ProAdvisor', icon: Award },
    { name: 'QuickBooks Online Advanced Certified ProAdvisor', icon: FileText },
    { name: 'QuickBooks Desktop Certified ProAdvisor', icon: Shield },
    { name: 'QuickBooks Desktop Enterprise Certified', icon: CheckCircle }
  ];

  const teamStats = [
    { value: '10+', label: 'Years Experience', icon: Clock },
    { value: 'Small', label: 'Dedicated Team', icon: Users },
    { value: 'Various', label: 'Industries Served', icon: TrendingUp },
    { value: '99.9%', label: 'Accuracy Rate', icon: CheckCircle }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              About ClearLedger
            </span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Financial Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At ClearLedger Solutions, we specialize in providing accurate, reliable, and transparent
            bookkeeping services tailored to small businesses and entrepreneurs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by a certified accounting professional, ClearLedger Solutions was born from 
                the recognition that small and mid-sized businesses deserve high-quality financial 
                management. Our founder JJ brings over 10+ years of experience in bookkeeping.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With our motto, "Where Clarity Meets Compliance," we're committed to making your 
                financial records easy to understand while ensuring full adherence to the latest 
                regulations. Whether you're managing day-to-day expenses, need monthly maintenance 
                for your business accounts, or just need assistance with the annual work at the 
                end of the year, our expert team brings peace of mind through organized, compliant 
                financial reporting.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-6">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-heading text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Team Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-premium">
              <h4 className="font-heading text-xl font-bold text-foreground mb-6">
                Meet Our Leadership Team
              </h4>
              
              {/* Team Members */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">JJ Eldredge</h5>
                    <p className="text-sm text-muted-foreground">Owner - Certified ProAdvisor</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Regan Eldredge</h5>
                    <p className="text-sm text-muted-foreground">Office Manager & Head of Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Certifications & Partnerships
          </h3>
          
          {/* QuickBooks Certification Banners */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-center gap-6 items-center">
                {/* QuickBooks Online ProAdvisor Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-b from-blue-900 to-blue-800 rounded-full flex items-center justify-center border-4 border-blue-900 relative">
                    <div className="text-white text-xs font-bold text-center leading-tight">
                      <div>QB</div>
                      <div className="text-green-400">Certified</div>
                    </div>
                    <div className="absolute -bottom-2 bg-green-500 text-white px-3 py-1 rounded text-xs font-bold">
                      Online
                    </div>
                  </div>
                  <span className="text-xs text-center mt-2 font-medium">ProAdvisor</span>
                </div>

                {/* QuickBooks Advanced Online ProAdvisor Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-b from-blue-900 to-blue-800 rounded-full flex items-center justify-center border-4 border-blue-900 relative">
                    <div className="text-white text-xs font-bold text-center leading-tight">
                      <div>QB</div>
                      <div className="text-green-400">Certified</div>
                    </div>
                    <div className="absolute -bottom-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                      Advanced
                    </div>
                  </div>
                  <span className="text-xs text-center mt-2 font-medium">ProAdvisor</span>
                </div>

                {/* QuickBooks Desktop ProAdvisor Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-b from-blue-500 to-blue-600 transform rotate-45 flex items-center justify-center border-4 border-blue-700">
                    <div className="text-white text-xs font-bold text-center leading-tight transform -rotate-45">
                      <div>QB</div>
                      <div>Desktop</div>
                    </div>
                  </div>
                  <span className="text-xs text-center mt-2 font-medium">Certified ProAdvisor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-shadow">
                  <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-medium text-foreground text-sm leading-tight">{cert.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-card rounded-2xl p-12 shadow-premium text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Let us help you achieve financial clarity and compliance. Contact us today 
            to discuss your bookkeeping needs and get a custom solution for your business.
          </p>
          <Button className="btn-primary" size="lg">
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;