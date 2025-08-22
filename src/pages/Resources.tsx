import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Download, 
  Clock,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  CheckCircle,
  FileText,
  Video,
  PieChart,
  Calculator,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

const ResourcesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resources = [
    {
      category: 'Financial Management Guides',
      icon: BookOpen,
      items: [
        {
          title: 'Complete Guide to QuickBooks Setup for Small Businesses',
          description: 'Step-by-step guide to setting up QuickBooks Online and Desktop for optimal financial management.',
          type: 'PDF Guide',
          readTime: '15 min read',
          downloadSize: '2.4 MB'
        },
        {
          title: 'Monthly Financial Close Checklist',
          description: 'Comprehensive checklist to ensure accurate and timely month-end financial closing.',
          type: 'Checklist',
          readTime: '5 min read',
          downloadSize: '1.1 MB'
        },
        {
          title: 'Cash Flow Management for Growing Businesses',
          description: 'Essential strategies for managing cash flow during periods of business growth.',
          type: 'eBook',
          readTime: '25 min read',
          downloadSize: '3.2 MB'
        }
      ]
    },
    {
      category: 'Tax & Compliance',
      icon: FileText,
      items: [
        {
          title: 'Small Business Tax Deduction Guide 2024',
          description: 'Complete list of tax deductions available to small businesses with documentation requirements.',
          type: 'PDF Guide',
          readTime: '20 min read',
          downloadSize: '2.8 MB'
        },
        {
          title: 'Payroll Compliance Checklist',
          description: 'Ensure your payroll processes meet all federal and state compliance requirements.',
          type: 'Checklist',
          readTime: '10 min read',
          downloadSize: '1.5 MB'
        }
      ]
    },
    {
      category: 'Business Growth',
      icon: TrendingUp,
      items: [
        {
          title: 'Financial KPIs Every Business Owner Should Track',
          description: 'Key performance indicators that provide insights into your business financial health.',
          type: 'White Paper',
          readTime: '18 min read',
          downloadSize: '2.1 MB'
        },
        {
          title: 'Preparing Your Finances for Business Expansion',
          description: 'Financial planning considerations when scaling your business operations.',
          type: 'Guide',
          readTime: '22 min read',
          downloadSize: '2.9 MB'
        }
      ]
    }
  ];

  const webinars = [
    {
      title: 'QuickBooks Best Practices for 2024',
      date: 'December 15, 2024',
      time: '2:00 PM EST',
      duration: '45 minutes',
      presenter: 'Sarah Chen, CPA',
      description: 'Learn the latest QuickBooks features and optimization techniques for efficient bookkeeping.',
      status: 'upcoming'
    },
    {
      title: 'Year-End Financial Planning Strategies',
      date: 'November 28, 2024',
      time: '3:00 PM EST',
      duration: '60 minutes',
      presenter: 'Michael Rodriguez, CPA',
      description: 'Essential year-end planning strategies to optimize your tax position and prepare for 2025.',
      status: 'recording'
    },
    {
      title: 'Cash Flow Management Masterclass',
      date: 'October 22, 2024',
      time: '2:00 PM EST',
      duration: '50 minutes',
      presenter: 'Lisa Thompson, CFE',
      description: 'Advanced techniques for managing cash flow and improving working capital efficiency.',
      status: 'recording'
    }
  ];

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How quickly can you start managing our books?',
          answer: 'We can typically begin managing your books within 5-7 business days of signing up. This includes initial consultation, system setup, and historical data review. Our onboarding process is designed to be thorough yet efficient.'
        },
        {
          question: 'What information do you need to get started?',
          answer: 'We\'ll need access to your QuickBooks account (or help setting one up), bank statements for the last 3 months, any existing financial records, payroll information if applicable, and a list of your business accounts and credit cards.'
        },
        {
          question: 'Do you work with businesses in all industries?',
          answer: 'Yes, we work with businesses across all industries including retail, professional services, manufacturing, healthcare, technology, real estate, and more. Our team has experience with industry-specific accounting requirements.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'What\'s included in your monthly bookkeeping service?',
          answer: 'Our monthly service includes transaction categorization, bank reconciliation, financial statement preparation, accounts receivable/payable management, and monthly financial reporting. Specific inclusions vary by plan level.'
        },
        {
          question: 'Can you handle payroll for remote employees in different states?',
          answer: 'Yes, we can manage payroll for employees across all 50 states. We handle state tax registrations, compliance requirements, and ensure all filings are completed accurately and on time.'
        },
        {
          question: 'Do you offer month-to-month services or require annual contracts?',
          answer: 'We offer flexible month-to-month services with no long-term contracts required. You can cancel anytime with 30 days notice. We also offer annual plans with discounted rates for clients who prefer longer commitments.'
        }
      ]
    },
    {
      category: 'Technology & Security',
      questions: [
        {
          question: 'How do you ensure the security of our financial data?',
          answer: 'We use bank-level security including 256-bit SSL encryption, multi-factor authentication, SOC 2 Type II certified processes, and regular security audits. All data is stored in secure, encrypted databases with daily backups.'
        },
        {
          question: 'What accounting software do you work with?',
          answer: 'We specialize in QuickBooks Online and Desktop but also work with Xero, Sage, and other popular accounting platforms. We can help you choose the best software for your business needs.'
        },
        {
          question: 'Can you integrate with our existing business systems?',
          answer: 'Yes, we can integrate with most popular business systems including CRM software, e-commerce platforms, payment processors, time tracking tools, and inventory management systems.'
        }
      ]
    },
    {
      category: 'Support & Communication',
      questions: [
        {
          question: 'How do you communicate updates and reports?',
          answer: 'We provide monthly financial reports via email and can schedule regular review calls. Clients have access to our secure client portal for real-time access to reports and documents. We also offer quarterly business review meetings.'
        },
        {
          question: 'What if we have questions between monthly reports?',
          answer: 'All clients have email support with guaranteed response times based on their plan level. Professional and Enterprise plans also include phone support. We encourage questions and proactive communication.'
        },
        {
          question: 'Do you provide year-end tax support?',
          answer: 'Yes, we prepare all necessary financial reports and documentation for tax preparation. We can coordinate directly with your CPA or tax preparer, and our Enterprise clients receive dedicated tax planning support.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Resources & Support
              </span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Financial Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of financial guides, tools, and expert insights 
              to help you make informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Download Our Free Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert-created guides, checklists, and tools to help you manage your business finances
            </p>
          </div>

          <div className="space-y-16">
            {resources.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-8">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-card rounded-xl p-6 shadow-card hover:shadow-premium transition-shadow group">
                        <div className="flex items-start justify-between mb-4">
                          <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                            {item.type}
                          </span>
                          <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        
                        <h4 className="font-heading text-lg font-bold text-foreground mb-3">
                          {item.title}
                        </h4>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                          <span>{item.downloadSize}</span>
                        </div>
                        
                        <Button className="w-full btn-primary group">
                          Download Free
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Educational Webinars
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our expert-led webinars or watch recordings of past sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-premium">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    webinar.status === 'upcoming' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {webinar.status === 'upcoming' ? 'Upcoming' : 'Recording Available'}
                  </span>
                  <Video className="w-5 h-5 text-primary" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {webinar.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {webinar.description}
                </p>

                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{webinar.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{webinar.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{webinar.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Presenter:</span>
                    <span className="font-medium">{webinar.presenter}</span>
                  </div>
                </div>

                <Button className="w-full btn-secondary">
                  {webinar.status === 'upcoming' ? 'Register Free' : 'Watch Recording'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openFaq === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="bg-card rounded-xl shadow-card overflow-hidden">
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start space-x-4">
                            <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <h4 className="font-heading text-lg font-bold text-foreground">
                              {faq.question}
                            </h4>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`} />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="pl-9">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center bg-card p-12 rounded-2xl shadow-premium">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Stay Updated with Financial Insights
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our monthly newsletter for financial tips, industry updates, 
              and exclusive resources delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-primary">
                Subscribe Free
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to provide 
              personalized guidance and answer your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;