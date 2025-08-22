import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
      details: '+1 (555) 123-4567',
      subtext: 'Mon-Fri 8AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@clearledger.com',
      subtext: '24-hour response guarantee'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Toronto, ON',
      subtext: 'Serving clients across North America'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 8AM-6PM EST',
      subtext: 'Emergency support available'
    }
  ];

  const consultationBenefits = [
    'Free 30-minute financial assessment',
    'Custom service recommendations',
    'No-obligation pricing quote',
    'Same-day response guaranteed'
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a free consultation or reach out to discuss how we can help streamline your bookkeeping.
            </p>
          </div>

          {/* Calendly Integration */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Schedule Your Free Consultation
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Book a 30-minute strategy session with our bookkeeping experts. 
                  No commitment required - just honest advice and a custom proposal.
                </p>
              </div>
              
              {/* Calendly Inline Widget */}
              <div className="calendly-inline-widget" 
                   data-url="https://calendly.com/clearledger-solutions/free-consultation" 
                   style={{minWidth: '320px', height: '700px'}}>
              </div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Can't find a time that works? <a href="#contact-form" className="text-primary hover:underline">Send us a message</a> and we'll find a time that fits your schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-4 mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground">
                Have questions? Need a quote? We'd love to hear from you.
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
              <div className="grid md:grid-cols-2 gap-4">
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

              <div className="grid md:grid-cols-2 gap-4">
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
                  <option value="payroll">Payroll & HR</option>
                  <option value="reconciliation">Monthly Reconciliation</option>
                  <option value="billing">Billing & A/R</option>
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
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-8 shadow-premium">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl p-8 shadow-premium">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Prefer to Talk?
              </h3>
              <div className="space-y-4">
                <Button className="w-full btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (555) 123-4567
                </Button>
                <Button variant="outline" className="w-full btn-secondary">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Average response time: Under 2 hours
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent p-6 rounded-xl">
              <h4 className="font-medium text-accent-foreground mb-2">
                Need Urgent Help?
              </h4>
              <p className="text-sm text-accent-foreground mb-4">
                For existing clients with urgent financial matters, 
                call our emergency line available 24/7.
              </p>
              <Button variant="outline" size="sm" className="text-accent-foreground border-accent-foreground">
                Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;