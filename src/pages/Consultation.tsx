import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    currentSystem: '',
    monthlyTransactions: '',
    employees: '',
    challenges: '',
    goals: '',
    timeline: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Consultation form submitted:', formData);
  };

  const consultationBenefits = [
    {
      icon: Calculator,
      title: 'Financial Assessment',
      description: 'Comprehensive review of your current financial processes and systems'
    },
    {
      icon: FileText,
      title: 'Custom Proposal',
      description: 'Tailored solution designed specifically for your business needs'
    },
    {
      icon: TrendingUp,
      title: 'ROI Analysis',
      description: 'Clear understanding of potential savings and efficiency gains'
    },
    {
      icon: Shield,
      title: 'Compliance Review',
      description: 'Assessment of your current compliance status and recommendations'
    }
  ];

  const consultationProcess = [
    {
      step: '01',
      title: 'Schedule Consultation',
      description: 'Book your free 30-minute consultation at your convenience'
    },
    {
      step: '02',
      title: 'Financial Review',
      description: 'We\'ll assess your current financial processes and challenges'
    },
    {
      step: '03',
      title: 'Custom Solution',
      description: 'Receive a tailored proposal within 24 hours'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Smooth transition to your new financial management system'
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-accent-foreground" />
                <span className="text-sm font-medium text-accent-foreground">
                  Free Consultation
                </span>
              </div>
              
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Free Consultation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform your financial management with a personalized consultation. 
                Our experts will assess your needs and create a custom solution to save you time and money.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>30-minute free consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Custom proposal within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No obligation or commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What You'll Get
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our consultation process is designed to give you maximum value and clarity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="card-service text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent, and designed to get you results quickly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-xl font-bold text-primary-foreground">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Form */}
                <div className="lg:col-span-2 bg-card rounded-2xl p-8 lg:p-12 shadow-premium">
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Schedule Your Free Consultation
                    </h2>
                    <p className="text-muted-foreground">
                      Tell us about your business and we'll create a custom solution for your financial management needs.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 text-base"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-3">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-3">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-3">
                          Business Type
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base px-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        >
                          <option value="">Select business type</option>
                          <option value="service">Service Business</option>
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="consulting">Consulting</option>
                          <option value="construction">Construction</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="currentSystem" className="block text-sm font-medium text-foreground mb-3">
                          Current System
                        </label>
                        <select
                          id="currentSystem"
                          name="currentSystem"
                          value={formData.currentSystem}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base px-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        >
                          <option value="">Select current system</option>
                          <option value="quickbooks-online">QuickBooks Online</option>
                          <option value="quickbooks-desktop">QuickBooks Desktop</option>
                          <option value="xero">Xero</option>
                          <option value="freshbooks">FreshBooks</option>
                          <option value="manual">Manual/Spreadsheets</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="monthlyTransactions" className="block text-sm font-medium text-foreground mb-3">
                          Monthly Transactions
                        </label>
                        <select
                          id="monthlyTransactions"
                          name="monthlyTransactions"
                          value={formData.monthlyTransactions}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base px-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        >
                          <option value="">Select range</option>
                          <option value="0-50">0-50</option>
                          <option value="51-100">51-100</option>
                          <option value="101-250">101-250</option>
                          <option value="251-500">251-500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-3">
                          Number of Employees
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base px-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        >
                          <option value="">Select range</option>
                          <option value="1-5">1-5</option>
                          <option value="6-10">6-10</option>
                          <option value="11-25">11-25</option>
                          <option value="26-50">26-50</option>
                          <option value="50+">50+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium text-foreground mb-3">
                        Current Financial Challenges
                      </label>
                      <Textarea
                        id="challenges"
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full text-base p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        placeholder="What are your biggest financial management challenges?"
                      />
                    </div>

                    <div>
                      <label htmlFor="goals" className="block text-sm font-medium text-foreground mb-3">
                        Goals & Objectives
                      </label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full text-base p-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        placeholder="What do you hope to achieve with better financial management?"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-3">
                          Implementation Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base px-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="6-months">Within 6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-3">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full h-12 text-base px-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-500">Under $500/month</option>
                          <option value="500-1000">$500-$1,000/month</option>
                          <option value="1000-2000">$1,000-$2,000/month</option>
                          <option value="2000+">$2,000+/month</option>
                          <option value="custom">Custom budget</option>
                        </select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full btn-primary text-lg py-6 h-16 text-xl font-semibold">
                      Schedule Free Consultation
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="bg-card rounded-2xl p-8 shadow-premium">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                      Get In Touch
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">(903) 815-9488</p>
                          <p className="text-sm text-muted-foreground">Call us directly</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">jj@yourclearledger.com</p>
                          <p className="text-sm text-muted-foreground">Email us anytime</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Whitewright, TX</p>
                          <p className="text-sm text-muted-foreground">Serving clients nationwide</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      Why Choose ClearLedger?
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">QuickBooks Certified ProAdvisors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">10+ years of experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">Custom solutions for your business</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">24-hour response guarantee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">No long-term contracts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Consultation; 