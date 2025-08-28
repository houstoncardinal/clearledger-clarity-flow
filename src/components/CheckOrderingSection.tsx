import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Package, 
  FileText, 
  Mail,
  ArrowRight,
  Star,
  Zap,
  Award
} from 'lucide-react';

const CheckOrderingSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Built-in Security',
      description: 'Chemically sensitive paper, microprint borders, and invisible fluorescent fibers'
    },
    {
      icon: CheckCircle,
      title: 'Software Compatible',
      description: 'Fully compatible with QuickBooks and Sage 100 Contractor'
    },
    {
      icon: Package,
      title: 'Free Personalization',
      description: 'Includes business imprint, colors, typefaces, and standard logo'
    },
    {
      icon: FileText,
      title: 'Tear-off Vouchers',
      description: 'Built-in vouchers provide detailed payment records'
    },
    {
      icon: Mail,
      title: 'Matching Envelopes',
      description: 'Double window confidential envelopes with security tinting'
    }
  ];

  const checkTypes = [
    {
      name: 'Laser Top Check',
      description: 'DLT103 - Premium laser checks with preprinted lines',
      image: '/topcheck.png',
      features: ['Preprinted lines', '2 tear-off vouchers', 'Laser compatible']
    },
    {
      name: 'Laser Middle Check',
      description: 'DLM260 - Standard laser checks with top and bottom vouchers',
      image: '/middlecheck.png',
      features: ['Top and bottom vouchers', 'Laser compatible', 'Premium design']
    },
    {
      name: 'Laser Bottom Check',
      description: 'DLB135 - Compact laser checks with bottom voucher',
      image: '/bottomcheck.png',
      features: ['Bottom voucher', 'Compact design', 'Laser compatible']
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 px-6 py-3 rounded-full mb-8 border border-primary/20">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Premium Check Solutions
            </span>
          </div>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Custom Business Checks
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Elevate your business with custom-designed checks featuring advanced security features, 
            complete personalization, and seamless software integration.
          </p>
          
          {/* Premium Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-primary bg-primary/10 text-sm px-4 py-2 border border-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Security Features
            </Badge>
            <Badge variant="secondary" className="text-primary bg-primary/10 text-sm px-4 py-2 border border-primary/20">
              <CheckCircle className="w-4 h-4 mr-2" />
              QuickBooks Compatible
            </Badge>
            <Badge variant="secondary" className="text-primary bg-primary/10 text-sm px-4 py-2 border border-primary/20">
              <Package className="w-4 h-4 mr-2" />
              Free Personalization
            </Badge>
            <Badge variant="secondary" className="text-primary bg-primary/10 text-sm px-4 py-2 border border-primary/20">
              <Award className="w-4 h-4 mr-2" />
              Premium Quality
            </Badge>
          </div>
        </div>

        {/* Check Types Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {checkTypes.map((check, index) => {
            const checkTypeId = index === 0 ? 'DLT103' : index === 1 ? 'DLM260' : 'DLB135';
            return (
              <Link key={index} to={`/check-ordering?type=${checkTypeId}`} className="block">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-primary/30 overflow-hidden cursor-pointer">
                  <CardContent className="p-8">
                    <div className="text-center">
                      {/* Check Image */}
                      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={check.image} 
                          alt={check.name}
                          className="w-full max-w-xs mx-auto"
                        />
                      </div>
                      
                      {/* Check Info */}
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                        {check.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {check.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {check.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Order Now Button */}
                      <Button className="w-full btn-primary group-hover:scale-105 transition-transform duration-300">
                        Order This Check
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary-dark/10 rounded-3xl p-12 lg:p-16 border border-primary/20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
                         <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
               Ready to Order Your Custom Checks?
             </h3>
             <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
               Join thousands of businesses who trust our premium check solutions. 
               Get started with a free consultation and see how our custom checks can elevate your business.
             </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/check-ordering">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Zap className="w-5 h-5 mr-3" />
                  Order Checks Now
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-6 h-auto border-2">
                  <Package className="w-5 h-5 mr-3" />
                  Request Sample
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-8">
              ✓ Free consultation • ✓ No setup fees • ✓ Fast turnaround • ✓ Secure ordering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOrderingSection; 