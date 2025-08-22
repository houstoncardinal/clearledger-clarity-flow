import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  Lock,
  FileText,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const certifications = [
    { name: 'QuickBooks ProAdvisor', icon: Award },
    { name: 'CPA Partnership', icon: FileText },
    { name: 'SOC 2 Type II', icon: Shield },
    { name: 'Bank-Level Encryption', icon: Lock }
  ];

  const teamStats = [
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '25+', label: 'Team Members', icon: Users },
    { value: '500+', label: 'Clients Served', icon: TrendingUp },
    { value: '99.9%', label: 'Accuracy Rate', icon: CheckCircle }
  ];

  const securityFeatures = [
    'SOC 2 Type II certified security processes',
    'Bank-level 256-bit SSL encryption',
    'Daily encrypted data backups',
    'Multi-factor authentication required',
    'Regular security audits and updates',
    'GDPR and CCPA compliant data handling'
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
            For over 15 years, ClearLedger Solutions has been providing exceptional 
            financial management services to growing businesses across North America.
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
                Founded by certified accounting professionals, ClearLedger was born from 
                the recognition that small and mid-sized businesses deserve the same 
                high-quality financial management that larger corporations enjoy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 500 businesses across various industries, from 
                startups to established companies with complex financial needs. Our 
                commitment to accuracy, transparency, and exceptional service has made 
                us a trusted partner in our clients' growth journeys.
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
                    <h5 className="font-medium text-foreground">Sarah Chen, CPA</h5>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Michael Rodriguez</h5>
                    <p className="text-sm text-muted-foreground">Head of Operations</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">Lisa Thompson</h5>
                    <p className="text-sm text-muted-foreground">Head of Compliance</p>
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
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-shadow">
                  <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-medium text-foreground">{cert.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-card rounded-2xl p-12 shadow-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Security & Compliance
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your financial data security is our top priority. We maintain the highest 
                standards of data protection and compliance to ensure your information 
                remains safe and confidential.
              </p>
              
              <div className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Security Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-accent rounded-xl">
                  <Lock className="w-8 h-8 text-accent-foreground mx-auto mb-3" />
                  <div className="font-bold text-lg text-accent-foreground">256-bit</div>
                  <div className="text-sm text-accent-foreground">SSL Encryption</div>
                </div>
                <div className="text-center p-6 bg-accent rounded-xl">
                  <Shield className="w-8 h-8 text-accent-foreground mx-auto mb-3" />
                  <div className="font-bold text-lg text-accent-foreground">SOC 2</div>
                  <div className="text-sm text-accent-foreground">Type II Certified</div>
                </div>
              </div>

              <Button className="w-full btn-primary">
                View Security Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;