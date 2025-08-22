import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  MapPin,
  Phone,
  Mail,
  Star,
  Calendar,
  Target
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      title: 'Founder & CEO',
      credentials: 'CPA, MBA',
      experience: '15+ years',
      specialties: ['Strategic Planning', 'Tax Compliance', 'Business Advisory'],
      bio: 'Sarah founded ClearLedger with a vision to democratize high-quality financial management for growing businesses.'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Head of Operations',
      credentials: 'CPA, QuickBooks ProAdvisor',
      experience: '12+ years',
      specialties: ['Process Optimization', 'System Integration', 'Team Management'],
      bio: 'Michael ensures our operations run smoothly and our clients receive exceptional service every month.'
    },
    {
      name: 'Lisa Thompson',
      title: 'Head of Compliance',
      credentials: 'CPA, CFE',
      experience: '18+ years',
      specialties: ['Regulatory Compliance', 'Risk Management', 'Audit Support'],
      bio: 'Lisa oversees all compliance matters and ensures our processes meet the highest industry standards.'
    },
    {
      name: 'David Kim',
      title: 'Technology Director',
      credentials: 'MS Computer Science',
      experience: '10+ years',
      specialties: ['Data Security', 'System Integration', 'Process Automation'],
      bio: 'David leads our technology initiatives and ensures our systems are secure, efficient, and scalable.'
    }
  ];

  const companyStats = [
    { value: '500+', label: 'Clients Served', icon: Users },
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '99.9%', label: 'Accuracy Rate', icon: Target },
    { value: '25+', label: 'Team Members', icon: TrendingUp }
  ];

  const certifications = [
    { name: 'QuickBooks ProAdvisor', description: 'Certified experts in QuickBooks Online and Desktop' },
    { name: 'CPA Partnership', description: 'Direct partnerships with certified public accountants' },
    { name: 'SOC 2 Type II', description: 'Audited security and availability controls' },
    { name: 'Bank-Level Encryption', description: '256-bit SSL encryption for all data transmission' }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Sarah Chen establishes ClearLedger Solutions with a focus on small business bookkeeping.'
    },
    {
      year: '2012',
      title: 'Team Expansion',
      description: 'Grew to 10 team members and began serving clients across multiple industries.'
    },
    {
      year: '2015',
      title: 'SOC 2 Certification',
      description: 'Achieved SOC 2 Type II certification, demonstrating our commitment to security.'
    },
    {
      year: '2018',
      title: 'Technology Integration',
      description: 'Launched advanced automation tools and integrated payment processing solutions.'
    },
    {
      year: '2021',
      title: '500th Client Milestone',
      description: 'Reached 500 active clients and expanded our service offerings to include HR support.'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Now serving businesses across North America with a team of 25+ professionals.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                About ClearLedger
              </span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Trusted Financial Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 15 years, ClearLedger Solutions has been providing exceptional 
              financial management services to growing businesses across North America.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-card rounded-xl p-6 shadow-card">
                  <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by certified accounting professional Sarah Chen, ClearLedger 
                  Solutions was born from the recognition that small and mid-sized businesses 
                  deserve the same high-quality financial management that larger corporations enjoy.
                </p>
                <p>
                  What started as a boutique bookkeeping service has evolved into a comprehensive 
                  financial management partner, serving over 500 businesses across various industries. 
                  Our commitment to accuracy, transparency, and exceptional service has made us a 
                  trusted partner in our clients' growth journeys.
                </p>
                <p>
                  Today, we combine cutting-edge technology with human expertise to deliver 
                  financial clarity and compliance that empowers businesses to focus on what 
                  they do best - growing their companies.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-premium">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                To provide growing businesses with the financial clarity and compliance they 
                need to make informed decisions and achieve sustainable growth.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Accuracy First</h4>
                    <p className="text-sm text-muted-foreground">99.9% accuracy rate maintained across all client engagements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Transparent Communication</h4>
                    <p className="text-sm text-muted-foreground">Clear, regular updates and easy-to-understand reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Proactive Partnership</h4>
                    <p className="text-sm text-muted-foreground">Strategic insights and recommendations for business growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small bookkeeping service to a comprehensive financial partner
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 shadow-card">
                  <div className="font-heading text-xl font-bold text-primary mb-2">
                    {item.year}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading ClearLedger Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-premium">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.credentials} • {member.experience}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Certifications & Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security and our professional standards are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="btn-primary">
              View Security Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-12 shadow-premium text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Ready to Partner with ClearLedger?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 500 businesses who trust us with their financial management. 
              Let's discuss how we can support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;