import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import CalendlyWidget from './CalendlyWidget';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
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
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(903) 815-9488',
      subtext: 'M-Th 7:30am-4:30pm, Fri 7:30am-1:00pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'jj@yourclearledger.com',
      subtext: '24-hour response commitment'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Whitewright, TX',
      subtext: 'Serving clients across 15+ industries'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'M-Th 7:30am-4:30pm, Fri 7:30am-1:00pm',
      subtext: 'Saturday & Sunday - Closed'
    }
  ];

  const consultationBenefits = [
    'Free 30-minute financial assessment',
    'Custom service recommendations',
    'No-obligation pricing quote',
    'Same-day response commitment'
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Get Started Today
            </span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Simplify Your Finances?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Schedule your free consultation or get in touch with our team. 
            We're here to help you achieve financial clarity and compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-premium">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Book Your Free Consultation
                </h3>
              </div>
              <p className="text-muted-foreground text-sm lg:text-base break-words">
                Tell us about your business and we'll schedule a personalized consultation 
                to discuss your financial management needs.
              </p>
            </div>

            {/* Consultation Benefits */}
            <div className="mb-8 p-6 bg-accent rounded-lg">
              <h4 className="font-medium text-accent-foreground mb-4">
                What You'll Get:
              </h4>
              <div className="space-y-2">
                {consultationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-accent-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="bookkeeping">QuickBooks Bookkeeping</option>
                  <option value="reconciliation">Monthly Reconciliation</option>
                  <option value="billing">Billing & A/P</option>
                  <option value="cleanup">Cleanup & Advisory</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Needs
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                  placeholder="Describe your current financial management challenges or goals..."
                />
              </div>

              <Button type="submit" className="w-full btn-primary group">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-6 lg:space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-premium">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 lg:space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-foreground text-sm lg:text-base">{info.title}</h4>
                        <p className="text-foreground font-medium text-sm lg:text-base break-words">{info.details}</p>
                        <p className="text-xs lg:text-sm text-muted-foreground break-words">{info.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-premium">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Prefer to Talk?
              </h3>
              <div className="space-y-4">
                <a href="tel:(903) 815-9488">
                  <Button className="w-full btn-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: (903) 815-9488
                  </Button>
                </a>
                <a href="mailto:jj@yourclearledger.com">
                  <Button variant="outline" className="w-full btn-secondary">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </a>
                
                {/* Calendly Integration */}
                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <h4 className="font-medium text-accent-foreground mb-2">
                    Schedule Online
                  </h4>
                  <p className="text-sm text-accent-foreground mb-4">
                    Book your free consultation directly on our calendar
                  </p>
                  <CalendlyWidget url="https://calendly.com/jj-yourclearledger" height={400} />
                </div>
              </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Average response time: Under 2 hours
                  </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;