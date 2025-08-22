import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  Lock,
  FileText,
  TrendingUp,
  Globe,
  Star,
  ArrowRight,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

const About = () => {
  const certifications = [
    { name: 'QuickBooks ProAdvisor', icon: Award, description: 'Certified experts in all QuickBooks platforms' },
    { name: 'CPA Partnership', icon: FileText, description: 'Direct access to certified public accountants' },
    { name: 'SOC 2 Type II', icon: Shield, description: 'Highest level of security certification' },
    { name: 'Bank-Level Encryption', icon: Lock, description: '256-bit SSL encryption for all data' }
  ];

  const teamStats = [
    { value: '15+', label: 'Years Experience', icon: Clock, description: 'Industry expertise since 2009' },
    { value: '25+', label: 'Team Members', icon: Users, description: 'Certified professionals' },
    { value: '500+', label: 'Clients Served', icon: TrendingUp, description: 'Across North America' },
    { value: '99.9%', label: 'Accuracy Rate', icon: CheckCircle, description: 'Industry-leading precision' }
  ];

  const securityFeatures = [
    'SOC 2 Type II certified security processes',
    'Bank-level 256-bit SSL encryption',
    'Daily encrypted data backups',
    'Multi-factor authentication required',
    'Regular security audits and updates',
    'GDPR and CCPA compliant data handling',
    'Real-time threat monitoring',
    'Secure data centers with redundancy'
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, ensuring accuracy and quality in every deliverable.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Your financial data security is our top priority. We build lasting relationships based on transparency and reliability.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously improve our processes and embrace new technologies to deliver better results for our clients.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, understanding your business and growing with you.'
    }
  ];

  const achievements = [
    { year: '2009', title: 'Company Founded', description: 'Started with a vision to democratize professional financial services' },
    { year: '2012', title: 'First 100 Clients', description: 'Reached our first major milestone serving growing businesses' },
    { year: '2015', title: 'SOC 2 Certification', description: 'Achieved highest security standards for client data protection' },
    { year: '2018', title: '500+ Clients', description: 'Became a trusted partner for businesses across North America' },
    { year: '2021', title: 'Digital Transformation', description: 'Launched advanced automation and AI-powered insights' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a top-tier financial management partner' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full mb-8">
            <Users className="w-5 h-5 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">
              About ClearLedger
            </span>
          </div>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Your Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Financial Partner
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For over 15 years, ClearLedger Solutions has been providing exceptional 
            financial management services to growing businesses across North America, 
            helping them achieve clarity, compliance, and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Column - Story */}
          <div className="space-y-10">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Founded by certified accounting professionals, ClearLedger was born from 
                the recognition that small and mid-sized businesses deserve the same 
                high-quality financial management that larger corporations enjoy.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Today, we serve over 500 businesses across various industries, from 
                startups to established companies with complex financial needs. Our 
                commitment to accuracy, transparency, and exceptional service has made 
                us a trusted partner in our clients' growth journeys.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-6">
                Our Core Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreValues.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="p-4 bg-card rounded-xl border border-border/50">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">{value.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Team Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-10 shadow-premium border border-border/50">
              <h4 className="font-heading text-2xl font-bold text-foreground mb-8">
                Meet Our Leadership Team
              </h4>
              
              {/* Team Members */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl border border-primary/20">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-lg">Sarah Chen, CPA</h5>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                    <p className="text-xs text-primary font-medium">15+ years in financial services</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl border border-primary/20">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-lg">Michael Rodriguez</h5>
                    <p className="text-sm text-muted-foreground">Head of Operations</p>
                    <p className="text-xs text-primary font-medium">12+ years in operations</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-5 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl border border-primary/20">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-lg">Lisa Thompson</h5>
                    <p className="text-sm text-muted-foreground">Head of Compliance</p>
                    <p className="text-xs text-primary font-medium">10+ years in compliance</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <Button variant="outline" className="w-full btn-secondary">
                  Meet the Full Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-premium transition-shadow border border-border/50">
                  <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-foreground font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here's how we've grown with our clients
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary-dark"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                      <div className="text-2xl font-bold text-primary mb-2">{achievement.year}</div>
                      <h4 className="font-heading text-xl font-bold text-foreground mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <h3 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Certifications & Partnerships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-premium transition-shadow border border-border/50 group">
                  <IconComponent className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-foreground text-lg mb-3">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-card rounded-3xl p-16 shadow-premium border border-border/50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Shield className="w-10 h-10 text-primary" />
                <h3 className="font-heading text-3xl font-bold text-foreground">
                  Security & Compliance
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Your financial data security is our top priority. We maintain the highest 
                standards of data protection and compliance to ensure your information 
                remains safe and confidential.
              </p>
              
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="btn-primary">
                  View Security Documentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {/* Security Badges */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl border border-primary/30">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-bold text-2xl text-primary mb-2">256-bit</div>
                  <div className="text-lg text-primary font-semibold">SSL Encryption</div>
                  <div className="text-sm text-primary/80 mt-2">Bank-level security</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl border border-primary/30">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-bold text-2xl text-primary mb-2">SOC 2</div>
                  <div className="text-lg text-primary font-semibold">Type II Certified</div>
                  <div className="text-sm text-primary/80 mt-2">Annual audits</div>
                </div>
              </div>

              <div className="bg-accent p-6 rounded-2xl border border-accent-foreground/20">
                <h4 className="font-semibold text-accent-foreground mb-3">Why This Matters</h4>
                <p className="text-sm text-accent-foreground">
                  Our security certifications ensure your financial data is protected with 
                  enterprise-grade security measures, giving you peace of mind and 
                  maintaining compliance with industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;