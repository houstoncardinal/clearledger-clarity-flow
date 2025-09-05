import React, { useState } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSelector from '@/components/ProductSelector';
import ShoppingCart from '@/components/ShoppingCart';
import Checkout from '@/components/Checkout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart as CartIcon, 
  Package, 
  CreditCard, 
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';

type PageStep = 'products' | 'cart' | 'checkout' | 'success';

const EnhancedCheckOrderingContent = () => {
  const [currentStep, setCurrentStep] = useState<PageStep>('products');
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    setShowCart(true);
  };

  const handleProceedToCheckout = () => {
    setCurrentStep('checkout');
  };

  const handleBackToCart = () => {
    setCurrentStep('products');
  };

  const handleCheckoutComplete = () => {
    setCurrentStep('success');
  };

  const handleStartOver = () => {
    setCurrentStep('products');
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Order Custom Business Checks Online | ClearLedger Solutions"
        description="Order professional business checks online with our easy-to-use ordering system. Custom designs, bulk discounts, and fast shipping available."
        keywords="business checks, custom checks, check ordering, QuickBooks checks, professional checks"
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Order Custom Business Checks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional business checks with custom designs, bulk discounts, and fast processing. 
            Compatible with QuickBooks and all major accounting software.
          </p>
        </div>

        {/* Progress Indicator */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-8">
              {[
                { step: 'products', title: 'Select Products', icon: Package },
                { step: 'cart', title: 'Review Cart', icon: CartIcon },
                { step: 'checkout', title: 'Checkout', icon: CreditCard },
                { step: 'success', title: 'Complete', icon: CheckCircle }
              ].map(({ step, title, icon: Icon }, index) => {
                const isActive = currentStep === step;
                const isCompleted = ['products', 'cart', 'checkout', 'success'].indexOf(currentStep) > index;
                
                return (
                  <div key={step} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      isActive ? 'border-primary bg-primary text-primary-foreground' :
                      isCompleted ? 'border-green-500 bg-green-500 text-white' :
                      'border-muted-foreground text-muted-foreground'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${
                        isActive ? 'text-primary' : 
                        isCompleted ? 'text-green-600' : 
                        'text-muted-foreground'
                      }`}>
                        {title}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className={`w-16 h-0.5 mx-4 ${
                        isCompleted ? 'bg-green-500' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        {currentStep === 'products' && (
          <div className="space-y-8">
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Professional Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality checks with built-in security features and professional appearance.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Badge className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-lg font-bold">
                    %
                  </Badge>
                  <h3 className="font-semibold mb-2">Bulk Discounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Save more with quantity discounts. Free shipping on orders over $500.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <CreditCard className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Secure Checkout</h3>
                  <p className="text-sm text-muted-foreground">
                    Safe and secure payment processing with industry-standard encryption.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Product Selection */}
            <ProductSelector onAddToCart={handleAddToCart} />

            {/* Cart Preview */}
            {showCart && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <CartIcon className="w-5 h-5" />
                      Your Cart
                    </span>
                    <Button onClick={() => setShowCart(false)} variant="outline" size="sm">
                      Continue Shopping
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ShoppingCart onCheckout={handleProceedToCheckout} />
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {currentStep === 'checkout' && (
          <Checkout onBack={handleBackToCart} onComplete={handleCheckoutComplete} />
        )}

        {currentStep === 'success' && (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Order Confirmed!
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for your order. We'll process your custom checks and send you a confirmation email shortly.
              </p>
              
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">What happens next?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• We'll review your order details</li>
                    <li>• Process your payment securely</li>
                    <li>• Begin production of your custom checks</li>
                    <li>• Ship your order within 5-7 business days</li>
                    <li>• Send tracking information via email</li>
                  </ul>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleStartOver}>
                    Place Another Order
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/'}>
                    Return to Homepage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

const EnhancedCheckOrdering = () => {
  return (
    <CartProvider>
      <EnhancedCheckOrderingContent />
    </CartProvider>
  );
};

export default EnhancedCheckOrdering;
