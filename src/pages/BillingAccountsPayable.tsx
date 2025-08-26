import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Shield, 
  TrendingUp, 
  DollarSign, 
  Calculator,
  ArrowRight,
  Star,
  Award,
  Zap,
  BarChart3,
  Calendar,
  Users,
  CreditCard
} from 'lucide-react';

const BillingAccountsPayable = () => {
  const services = [
    'Invoice generation and management',
    'Payment tracking and follow-up',
    'Vendor payment processing',
    'Cash flow optimization',
    'Expense categorization and coding',
    'Vendor relationship management',
    'Payment scheduling and automation',
    'Expense report processing',
    'Credit card reconciliation',
    'Purchase order management'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Processing',
      description: 'Reduce payment processing time by 60% with automated workflows'
    },
    {
      icon: DollarSign,
      title: 'Better Cash Flow',
      description: 'Optimize payment timing to improve your cash flow management'
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'Implement controls and approvals to prevent payment fraud'
    },
    {
      icon: TrendingUp,
      title: 'Vendor Relationships',
      description: 'Build stronger relationships with timely, accurate payments'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Invoice Processing',
      description: 'We receive, review, and code all incoming invoices for accuracy'
    },
    {
      step: '02',
      title: 'Approval Workflow',
      description: 'We manage approval processes and ensure proper authorization'
    },
    {
      step: '03',
      title: 'Payment Processing',
      description: 'We process payments on schedule and track all transactions'
    },
    {
      step: '04',
      title: 'Reconciliation',
      description: 'We reconcile payments and maintain accurate vendor records'
    }
  ];

  const features = [
    {
      name: 'Automated Invoice Processing',
      description: 'Streamlined invoice entry and approval workflows to reduce manual errors'
    },
    {
      name: 'Payment Scheduling',
      description: 'Strategic payment scheduling to optimize cash flow and maintain vendor relationships'
    },
    {
      name: 'Vendor Management',
      description: 'Comprehensive vendor database with payment history and contact information'
    },
    {
      name: 'Expense Tracking',
      description: 'Detailed expense categorization and reporting for better financial insights'
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Billing & A/P", url: "/billing-accounts-payable" }
  ];

  return (
    <>
      <SEO 
        title="Billing & Accounts Payable Services | ClearLedger Solutions"
        description="Professional billing and accounts payable management services. Streamlined invoicing, payment processing, and vendor management. Improve cash flow and vendor relationships."
        keywords="billing services, accounts payable, invoice processing, vendor management, payment tracking, cash flow optimization"
        canonical="/billing-accounts-payable"
        schema={[
          getServiceSchema("Billing & Accounts Payable Services", "Professional billing and accounts payable management services including invoice processing, payment tracking, and vendor management."),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Service Badge */}
              <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-accent-foreground/20 shadow-sm">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">
                  Billing & A/P Services
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
                Billing &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Accounts Payable
                </span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Services
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
                Streamlined invoicing and accounts payable management to improve cash flow and vendor relationships. 
                Reduce processing time by 60% with our automated workflows.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive Billing & A/P Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From invoice processing to vendor management, we handle all aspects of your accounts payable operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">{service}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Our Billing & A/P Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-card">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our A/P Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A streamlined process that ensures accuracy, compliance, and timely payments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-card">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Key Features & Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced tools and processes to streamline your accounts payable operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-premium">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-3xl p-12 shadow-premium text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Streamline Your A/P Process?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Reduce processing time, improve cash flow, and build better vendor relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Start Your Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(903) 815-9488">
                  <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
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

export default BillingAccountsPayable; 