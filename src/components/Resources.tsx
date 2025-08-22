import { Button } from '@/components/ui/button';
import { 
  FileText, 
  BookOpen, 
  Calculator, 
  TrendingUp, 
  Download, 
  Play,
  ArrowRight,
  Calendar,
  Users,
  Award,
  Clock
} from 'lucide-react';

const Resources = () => {
  const whitepapers = [
    {
      title: 'QuickBooks Optimization Guide 2024',
      description: 'Learn the latest strategies for maximizing QuickBooks efficiency and reducing manual work.',
      category: 'QuickBooks',
      readTime: '15 min read',
      downloads: '2.4k',
      icon: FileText,
      featured: true
    },
    {
      title: 'Financial Compliance Checklist',
      description: 'Essential compliance requirements for small to mid-sized businesses in 2024.',
      category: 'Compliance',
      readTime: '12 min read',
      downloads: '1.8k',
      icon: Award
    },
    {
      title: 'Payroll Best Practices',
      description: 'Streamline your payroll process and avoid common compliance pitfalls.',
      category: 'Payroll',
      readTime: '18 min read',
      downloads: '1.2k',
      icon: Users
    },
    {
      title: 'Cash Flow Management Strategies',
      description: 'Proven techniques for improving cash flow and financial stability.',
      category: 'Strategy',
      readTime: '20 min read',
      downloads: '1.6k',
      icon: TrendingUp
    }
  ];

  const webinars = [
    {
      title: 'Tax Season Preparation 2024',
      description: 'Everything you need to know to prepare for tax season efficiently.',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      duration: '60 min',
      attendees: '150+',
      icon: Calendar,
      featured: true
    },
    {
      title: 'QuickBooks Advanced Features',
      description: 'Unlock the full potential of QuickBooks with advanced features and automation.',
      date: 'March 22, 2024',
      time: '1:00 PM EST',
      duration: '45 min',
      attendees: '120+',
      icon: Calculator
    },
    {
      title: 'Financial Planning for Growth',
      description: 'Strategic financial planning to support your business expansion goals.',
      date: 'March 29, 2024',
      time: '3:00 PM EST',
      duration: '75 min',
      attendees: '200+',
      icon: TrendingUp
    }
  ];

  const tools = [
    {
      title: 'Financial Health Calculator',
      description: 'Assess your business financial health with our comprehensive calculator.',
      category: 'Calculator',
      icon: Calculator,
      featured: true
    },
    {
      title: 'Invoice Template Library',
      description: 'Professional invoice templates for various business types.',
      category: 'Templates',
      icon: FileText
    },
    {
      title: 'Expense Tracking Sheet',
      description: 'Downloadable expense tracking spreadsheet for better financial management.',
      category: 'Spreadsheet',
      icon: TrendingUp
    }
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full mb-8">
            <BookOpen className="w-5 h-5 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">
              Knowledge Center
            </span>
          </div>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Resources to Empower Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Financial Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Access our library of whitepapers, webinars, and tools designed to help you 
            make informed financial decisions and optimize your business operations.
          </p>
        </div>

        {/* Featured Whitepapers */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground">
              Featured Whitepapers
            </h3>
            <Button variant="outline" className="btn-secondary">
              View All Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => {
              const IconComponent = paper.icon;
              return (
                <div key={index} className={`group relative ${paper.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  {paper.featured && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="card-service h-full group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {paper.category}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {paper.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{paper.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full btn-primary group">
                      Download Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground">
              Upcoming Webinars
            </h3>
            <Button variant="outline" className="btn-secondary">
              View All Webinars
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => {
              const IconComponent = webinar.icon;
              return (
                <div key={index} className={`group relative ${webinar.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  {webinar.featured && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="card-service h-full group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Live
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {webinar.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">{webinar.attendees} registered</span>
                      </div>
                    </div>
                    
                    <Button className="w-full btn-primary group">
                      <Play className="w-4 h-4 mr-2" />
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Free Tools */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground">
              Free Tools & Templates
            </h3>
            <Button variant="outline" className="btn-secondary">
              Explore All Tools
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className={`group relative ${tool.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  {tool.featured && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="card-service h-full group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          Free
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {tool.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <Button className="w-full btn-secondary group">
                      Download Tool
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-accent/50 to-background rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              Stay Updated with Financial Insights
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get the latest financial management tips, industry updates, and exclusive 
              content delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources; 