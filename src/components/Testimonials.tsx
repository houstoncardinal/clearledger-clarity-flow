import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Solutions",
      role: "CEO & Founder",
      rating: 5,
      content: "ClearLedger has transformed our financial management. Their team is incredibly responsive and professional. We've saved countless hours on bookkeeping and gained valuable insights into our business performance.",
      avatar: "SC",
      industry: "Technology",
      service: "Monthly Bookkeeping"
    },
    {
      name: "Michael Rodriguez",
      company: "Green Earth Construction",
      role: "Operations Manager",
      rating: 5,
      content: "The level of detail and accuracy in their work is outstanding. They've helped us streamline our accounts payable process and improved our cash flow management significantly.",
      avatar: "MR",
      industry: "Construction",
      service: "Accounts Payable"
    },
    {
      name: "Lisa Thompson",
      company: "Bella's Boutique",
      role: "Owner",
      rating: 5,
      content: "As a small business owner, I was overwhelmed with bookkeeping. ClearLedger made everything simple and transparent. Their QuickBooks expertise saved us money and time.",
      avatar: "LT",
      industry: "Retail",
      service: "QuickBooks Management"
    },
    {
      name: "David Kim",
      company: "Urban Fitness Studio",
      role: "Managing Partner",
      rating: 5,
      content: "Their payroll processing is flawless and their compliance knowledge gives us peace of mind. The team is always available when we need them and provides excellent strategic advice.",
      avatar: "DK",
      industry: "Fitness",
      service: "Payroll & HR"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Retention Rate", description: "Long-term partnerships built on trust" },
    { value: "4.9/5", label: "Average Rating", description: "Consistently exceeding expectations" },
    { value: "500+", label: "Businesses Served", description: "Diverse industry experience" },
    { value: "15+", label: "Years Experience", description: "Proven track record of success" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what business owners across various industries have to say about working with ClearLedger.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-16">
            <div className="relative">
              {/* Main Testimonial */}
              <Card className="relative overflow-hidden">
                <CardContent className="p-8 lg:p-12">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                    <Quote className="w-12 h-12 text-primary/10" />
                  </div>
                  
                  {/* Content */}
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">
                          {testimonials[currentIndex].avatar}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-semibold text-foreground text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                      
                      {/* Service & Industry Badges */}
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {testimonials[currentIndex].industry}
                        </Badge>
                        <Badge className="bg-primary/10 text-primary text-xs">
                          {testimonials[currentIndex].service}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                More Client Success Stories
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how we've helped businesses across different industries achieve financial clarity and growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {testimonial.avatar}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold text-foreground mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {testimonial.role} at {testimonial.company}
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same level of service and expertise that our clients rave about. 
              Start your journey to financial clarity today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-5">
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-5 border-2">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 