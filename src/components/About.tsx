import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Shield, 
  TrendingUp, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Target,
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const certifications = [
    {
      name: "QuickBooks ProAdvisor",
      description: "Certified expert in QuickBooks Online and Desktop platforms",
      icon: Award,
      color: "text-blue-500"
    },
    {
      name: "Certified Bookkeeper",
      description: "Professional bookkeeping certification from AIPB",
      icon: Shield,
      color: "text-green-500"
    },
    {
      name: "Tax Preparation",
      description: "Licensed tax preparer with ongoing education requirements",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      name: "Payroll Specialist",
      description: "Certified payroll professional with compliance expertise",
      icon: Users,
      color: "text-orange-500"
    }
  ];

  const teamStats = [
    {
      value: "15+",
      label: "Years Combined Experience",
      description: "Our team brings decades of financial expertise",
      icon: Clock
    },
    {
      value: "500+",
      label: "Businesses Served",
      description: "Successfully managed financial operations for diverse companies",
      icon: Building2
    },
    {
      value: "99.9%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations",
      icon: Star
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance when you need it most",
      icon: Zap
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our work",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical in all our dealings",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      title: "Innovation",
      description: "Continuously improving processes and embracing new technologies",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust and results",
      icon: Heart,
      color: "text-red-500"
    }
  ];

  const achievements = [
    {
      year: "2009",
      title: "Company Founded",
      description: "ClearLedger Solutions established with a vision for transparent financial management"
    },
    {
      year: "2015",
      title: "100th Client Milestone",
      description: "Reached our first major milestone serving 100 businesses"
    },
    {
      year: "2019",
      title: "Technology Integration",
      description: "Launched advanced automation and cloud-based solutions"
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named Top Bookkeeping Service Provider in the region"
    }
  ];

  const securityFeatures = [
    "Bank-level 256-bit encryption",
    "Multi-factor authentication",
    "Regular security audits",
    "Secure cloud infrastructure",
    "Data backup and recovery",
    "Compliance with industry standards",
    "Employee background checks",
    "Confidentiality agreements"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-semibold">About Us</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted Financial Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience, we've built our reputation on accuracy, reliability, and unwavering commitment to our clients' financial success.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision and interaction in our business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${value.color} bg-primary/10 group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-3 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Stats */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-foreground mb-2">
                        {stat.label}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Our Journey
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones that have shaped ClearLedger into the trusted partner we are today.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                            <span>{achievement.year}</span>
                          </div>
                          <h4 className="font-semibold text-foreground mb-2 text-lg">
                            {achievement.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Security */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            
            {/* Certifications */}
            <div>
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Professional Certifications
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team maintains the highest professional standards through ongoing education and certification.
                </p>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <Card key={index} className="group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${cert.color} bg-primary/10`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {cert.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Security Features */}
            <div>
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Security & Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your financial data security is our top priority. We implement enterprise-grade security measures.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Why This Matters</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In today's digital world, financial data security is non-negotiable. Our comprehensive security measures ensure your sensitive information remains protected while maintaining the highest levels of accessibility and efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Work with Us?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust ClearLedger with their financial management. 
              Let's discuss how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-5">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-5 border-2">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;