import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@clearledger.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "(555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Business Ave, Suite 100",
      description: "New York, NY 10001"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-semibold">Get Started</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a free consultation or reach out to discuss how we can help streamline your bookkeeping.
            </p>
          </div>

          {/* Calendly Integration */}
          <div className="mb-16">
            <Card className="border border-border shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Schedule Your Free Consultation
                </CardTitle>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Book a 30-minute strategy session with our bookkeeping experts. 
                  No commitment required - just honest advice and a custom proposal.
                </p>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Calendly Inline Widget */}
                <div className="calendly-inline-widget" 
                     data-url="https://calendly.com/clearledger-solutions/free-consultation" 
                     style={{minWidth: '320px', height: '700px'}}>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have questions? Need a quote? We'd love to hear from you.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your bookkeeping needs..."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ready to transform your bookkeeping? Our team is here to help you get organized, 
                  save time, and focus on what matters most - growing your business.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.detail}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Why Choose ClearLedger?</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Free consultation with no obligation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Custom proposal within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">30-day satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;