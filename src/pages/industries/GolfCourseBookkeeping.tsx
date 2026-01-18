import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  getProfessionalServiceSchema, 
  getEnhancedBreadcrumbSchema, 
  getLocalBusinessSchema,
  getHowToSchema,
  getEnhancedReviewSchema,
  combineSchemas,
  COMPANY_INFO 
} from '@/utils/advancedSchemaMarkup';
import { 
  CheckCircle, 
  MapPin,
  TrendingUp,
  Users,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  DollarSign,
  Calendar,
  BarChart3,
  Landmark
} from 'lucide-react';

const GolfCourseBookkeeping = () => {
  const breadcrumbs = [
    { name: "Industries", url: "/services" },
    { name: "Golf Course Bookkeeping", url: "/golf-course-bookkeeping" }
  ];

  const services = [
    'Pro Shop Sales & Inventory Tracking',
    'Membership Billing & Dues Management',
    'Tournament & Event Accounting',
    'Seasonal Cash Flow Planning',
    'Payroll for Seasonal Staff',
    'F&B Revenue Management',
    'Capital Equipment Tracking',
    'Course Maintenance Budgeting'
  ];

  const challenges = [
    { title: 'Seasonal Revenue', description: 'Managing cash flow through peak and off-seasons with proper reserves' },
    { title: 'Multiple Revenue Streams', description: 'Green fees, memberships, pro shop, F&B, events, and lessons' },
    { title: 'Inventory Management', description: 'Pro shop merchandise, F&B inventory, and maintenance supplies' },
    { title: 'Staffing Fluctuations', description: 'Seasonal hiring, part-time staff, and varying labor costs' }
  ];

  const featuredCourses = [
    {
      name: 'Tanglewood Resort',
      location: 'Pottsboro, TX',
      description: 'Arnold Palmer-designed championship course on Lake Texoma with resort operations',
      features: ['18-hole championship course', 'Resort & lodging integration', 'Pro shop operations', 'Food & beverage services']
    },
    {
      name: 'Legacy Ridge Golf Course',
      location: 'Westminster, CO',
      description: 'Arthur Hills-designed municipal course with comprehensive practice facilities',
      features: ['Municipal course operations', 'Practice facility management', 'Event & tournament hosting', 'Junior programs accounting']
    }
  ];

  const process = [
    { name: 'Initial Assessment', text: 'We analyze your golf course operations, revenue streams, and current financial systems' },
    { name: 'System Setup', text: 'Configure QuickBooks for golf course-specific accounting with custom chart of accounts' },
    { name: 'Revenue Integration', text: 'Connect POS systems, membership billing, and online booking to your accounting' },
    { name: 'Ongoing Management', text: 'Monthly reconciliation, financial reporting, and seasonal cash flow planning' }
  ];

  const reviews = [
    { author: 'Tom Richardson', rating: 5, review: 'ClearLedger understands the unique challenges of golf course accounting. Their seasonal cash flow planning has been invaluable.', datePublished: '2025-01-10' },
    { author: 'Jennifer Walsh', rating: 5, review: 'Managing multiple revenue streams was overwhelming until ClearLedger took over our books. Pro shop, F&B, and green fees all reconciled perfectly.', datePublished: '2024-11-15' }
  ];

  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({
      name: "Golf Course Bookkeeping Services",
      description: "Specialized bookkeeping for golf courses including pro shop management, membership billing, tournament accounting, and seasonal financial planning.",
      url: "/golf-course-bookkeeping",
      category: "Industry-Specific Bookkeeping"
    }),
    getEnhancedBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema(),
    getHowToSchema({
      name: "How to Set Up Golf Course Bookkeeping",
      description: "ClearLedger's process for implementing comprehensive golf course financial management.",
      steps: process
    }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO 
        title="Golf Course Bookkeeping Services | Pro Shop & Membership Accounting | ClearLedger"
        description="Specialized bookkeeping services for golf courses and country clubs. Expert pro shop inventory, membership billing, tournament accounting, and seasonal cash flow management."
        keywords="golf course bookkeeping, country club accounting, pro shop inventory, membership billing, golf course financial management, tournament accounting, seasonal cash flow, QuickBooks for golf courses"
        canonical="/golf-course-bookkeeping"
        schema={pageSchema}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm">
                <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-accent-foreground">Golf Course Bookkeeping</span>
              </div>
              
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Expert{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Golf Course Bookkeeping
                </span>
                {' '}Services
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Comprehensive financial management for golf courses, country clubs, and resort operations. 
                From pro shop inventory to membership billing, we handle the unique complexities of golf course accounting.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(903) 815-9488">
                  <Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    <Phone className="w-4 h-4 mr-2" />
                    (903) 815-9488
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Complete Golf Course Financial Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized accounting solutions designed for the unique needs of golf operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Golf Course Accounting Challenges We Solve
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Trusted by Premier Golf Operations
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCourses.map((course, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-premium">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.location}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{course.name}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Golf Course Bookkeeping Process
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 shadow-premium text-center">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Improve Your Golf Course Finances?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join golf courses across the country that trust ClearLedger for their financial management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-base px-6 py-3">
                    Schedule Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(903) 815-9488">
                  <Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">
                    Call (903) 815-9488
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GolfCourseBookkeeping;