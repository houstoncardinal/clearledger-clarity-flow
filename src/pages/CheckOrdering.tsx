import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Building2, 
  MapPin, 
  Phone, 
  PhoneCall, 
  Banknote, 
  Hash, 
  FileText,
  Package,
  Mail,
  Calculator,
  Shield,
  CheckCircle,
  Info,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';

const CheckOrderingContent = () => {
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyAddress: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: '',
    faxNumber: '',
    
    // Bank Information
    bankName: '',
    bankCity: '',
    routingNumber: '',
    accountNumber: '',
    startingCheckNumber: '',
    
    // Product Selection
    checkType: '',
    quantity: '',
    duplicates: false,
    packingOrder: 'standard',
    
    // Additional Items
    envelopes: false,
    envelopeQuantity: '',
    depositForms: false,
    depositFormQuantity: '',
    depositFormDuplicates: false,
    taxForms: false,
    taxFormName: '',
    taxFormQuantity: '',
    
    // Design Options
    designColor: '',
    logoOption: 'standard',
    
    // Other
    otherNotes: '',
    
    // Logo Upload
    logoFile: null as File | null,
    logoPreview: ''
  });

  const checkTypes = [
    {
      id: 'DLT103',
      name: 'Laser Top Checks',
      description: 'QuickBooks or Sage 100 Contractor Compatible - 8 ½ x 11", 1-Part Original',
      features: [
        'Business checks with built-in security',
        'Preprinted lines for legibility',
        '2 tear-off vouchers',
        'Sheet format fits all standard printers',
        'Numbering options (consecutive or reverse)',
        'Multi-part options available',
        'Free standard logo included'
      ]
    },
    {
      id: 'DLM260',
      name: 'Laser Middle Checks',
      description: 'Sage 100 Contractor Compatible - 8 ½ x 11", 1-Part Original',
      features: [
        'Business checks with built-in security',
        'Top and bottom tear-off vouchers',
        'Sheet format fits all standard printers',
        'Numbering options (consecutive or reverse)',
        'Multi-part options available',
        'Free personalization included',
        'Custom logo available'
      ]
    },
    {
      id: 'DLB135',
      name: 'Laser Bottom Checks',
      description: 'Sage 100 Contractor Compatible - 8 ½ x 11", 1-Part Original',
      features: [
        'Business checks with built-in security',
        '2 tear-off vouchers',
        'Sheet format fits all standard printers',
        'Numbering options (consecutive or reverse)',
        'Multi-part option available',
        'Free personalization included',
        'Custom logo available'
      ]
    }
  ];

  const quantities = [
    { value: '250', label: '250 Checks', price: { '1': 115, '2': 203, '3': 234 } },
    { value: '500', label: '500 Checks', price: { '1': 156, '2': 277, '3': 339 } },
    { value: '1000', label: '1,000 Checks', price: { '1': 214, '2': 389, '3': 538 } },
    { value: '2000', label: '2,000 Checks', price: { '1': 355, '2': 626, '3': 929 } },
    { value: '2500', label: '2,500 Checks', price: { '1': 439, '2': 781, '3': 1154 } },
    { value: '3000', label: '3,000 Checks', price: { '1': 457, '2': 564, '3': 1333 } },
    { value: '4000', label: '4,000 Checks', price: { '1': 596, '2': 1115, '3': 1737 } },
    { value: '5000', label: '5,000 Checks', price: { '1': 703, '2': 1278, '3': 2143 } }
  ];

  const standardColors = [
    { name: 'Gray Herringbone', value: 'gray-herringbone', image: '/gray.png', premium: false },
    { name: 'Blue Herringbone', value: 'blue-herringbone', image: '/blue.png', premium: false },
    { name: 'Green Herringbone', value: 'green-herringbone', image: '/green.png', premium: false },
    { name: 'Maroon Herringbone', value: 'maroon-herringbone', image: '/maroon.png', premium: false },
    { name: 'Tan Herringbone', value: 'tan-herringbone', image: '/tan.png', premium: false },
    { name: 'Purple Herringbone', value: 'purple-herringbone', image: '/purple.png', premium: false },
    { name: 'Yellow Herringbone', value: 'yellow-herringbone', image: '/yellow.png', premium: false }
  ];

  const premiumColors = [
    { name: 'American Spirit', value: 'american-spirit', image: '/american.png', premium: true },
    { name: 'Antique', value: 'antique', image: '/antique.png', premium: true },
    { name: 'Blue Marble', value: 'blue-marble', image: '/bluemarble.png', premium: true },
    { name: 'TamperGuard Plus - Blue', value: 'tamperguard-blue', image: '/tamper.png', premium: true },
    { name: 'Gentry', value: 'gentry', image: '/gentry.png', premium: true },
    { name: 'Green Marble', value: 'green-marble', image: '/greenmarble.png', premium: true },
    { name: 'Monterey', value: 'monterey', image: '/monterery.png', premium: true }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const calculatePrice = () => {
    if (!formData.checkType || !formData.quantity) return 0;
    
    const quantity = quantities.find(q => q.value === formData.quantity);
    const parts = formData.duplicates ? '2' : '1';
    
    return quantity?.price[parts as keyof typeof quantity.price] || 0;
  };

  const calculateTotal = () => {
    let total = calculatePrice();
    
    // Add envelope cost
    if (formData.envelopes && formData.envelopeQuantity) {
      const envelopeQty = parseInt(formData.envelopeQuantity);
      if (envelopeQty >= 250) total += 85;
      if (envelopeQty >= 500) total += 106;
      if (envelopeQty >= 1000) total += 165;
      if (envelopeQty >= 1500) total += 229;
      if (envelopeQty >= 2000) total += 292;
    }
    
    // Add premium color upcharge
    const selectedColor = [...standardColors, ...premiumColors].find(c => c.value === formData.designColor);
    if (selectedColor?.premium) total += 15;
    
    return total;
  };

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [savedProgress, setSavedProgress] = useState<any>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveEmail, setSaveEmail] = useState('');

  // Calculate form completion percentage
  const calculateProgress = () => {
    const totalFields = 12; // Core required fields only
    let completedFields = 0;
    
    if (formData.companyName) completedFields++;
    if (formData.companyAddress) completedFields++;
    if (formData.city) completedFields++;
    if (formData.state) completedFields++;
    if (formData.zip) completedFields++;
    if (formData.phoneNumber) completedFields++;
    if (formData.bankName) completedFields++;
    if (formData.routingNumber) completedFields++;
    if (formData.accountNumber) completedFields++;
    if (formData.startingCheckNumber) completedFields++;
    if (formData.checkType) completedFields++;
    if (formData.quantity) completedFields++;
    
    return Math.min(Math.round((completedFields / totalFields) * 100), 100);
  };

  // Save progress to localStorage
  const saveProgress = () => {
    const progressData = {
      formData,
      timestamp: new Date().toISOString(),
      email: saveEmail
    };
    localStorage.setItem('checkOrderProgress', JSON.stringify(progressData));
    setShowSaveModal(false);
    setSaveEmail('');
  };

  // Load progress from localStorage
  const loadProgress = () => {
    const saved = localStorage.getItem('checkOrderProgress');
    if (saved) {
      try {
        const progressData = JSON.parse(saved);
        setFormData(progressData.formData);
        setSavedProgress(progressData);
        return true;
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
    return false;
  };

  // Clear saved progress
  const clearSavedProgress = () => {
    localStorage.removeItem('checkOrderProgress');
    setSavedProgress(null);
  };

  // Handle URL parameter for pre-selecting check type
  useEffect(() => {
    const checkTypeParam = searchParams.get('type');
    if (checkTypeParam && ['DLT103', 'DLM260', 'DLB135'].includes(checkTypeParam)) {
      setFormData(prev => ({
        ...prev,
        checkType: checkTypeParam
      }));
      
      // Scroll to the product selection section
      setTimeout(() => {
        const productSection = document.querySelector('[data-step="product"]');
        if (productSection) {
          productSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, [searchParams]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
    if (!formData.companyAddress.trim()) errors.companyAddress = 'Company address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.zip.trim()) errors.zip = 'ZIP code is required';
    if (!formData.bankName.trim()) errors.bankName = 'Bank name is required';
    if (!formData.routingNumber.trim()) errors.routingNumber = 'Routing number is required';
    if (!formData.accountNumber.trim()) errors.accountNumber = 'Account number is required';
    if (!formData.startingCheckNumber.trim()) errors.startingCheckNumber = 'Starting check number is required';
    if (!formData.checkType) errors.checkType = 'Please select a check type';
    if (!formData.quantity) errors.quantity = 'Please select a quantity';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Format the order data for easy processing
    const orderData = {
      orderDate: new Date().toISOString(),
      orderNumber: `CHK-${Date.now()}`,
      
      // Company Information
      company: {
        name: formData.companyName,
        address: formData.companyAddress,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        phone: formData.phoneNumber,
        fax: formData.faxNumber
      },
      
      // Bank Information
      bank: {
        name: formData.bankName,
        city: formData.bankCity,
        routingNumber: formData.routingNumber,
        accountNumber: formData.accountNumber,
        startingCheckNumber: formData.startingCheckNumber
      },
      
      // Product Details
      product: {
        checkType: formData.checkType,
        checkTypeName: checkTypes.find(t => t.id === formData.checkType)?.name || '',
        quantity: formData.quantity,
        duplicates: formData.duplicates,
        packingOrder: formData.packingOrder,
        designColor: formData.designColor,
        logoOption: formData.logoOption
      },
      
      // Additional Items
      additionalItems: {
        envelopes: formData.envelopes ? {
          quantity: formData.envelopeQuantity,
          price: formData.envelopeQuantity === '250' ? 85 :
                 formData.envelopeQuantity === '500' ? 106 :
                 formData.envelopeQuantity === '1000' ? 165 :
                 formData.envelopeQuantity === '1500' ? 229 :
                 formData.envelopeQuantity === '2000' ? 292 : 0
        } : null,
        depositForms: formData.depositForms ? {
          quantity: formData.depositFormQuantity,
          duplicates: formData.depositFormDuplicates,
          price: formData.depositFormQuantity === '150' ? 52 :
                 formData.depositFormQuantity === '300' ? 81 :
                 formData.depositFormQuantity === '600' ? 130 :
                 formData.depositFormQuantity === '1200' ? 200 :
                 formData.depositFormQuantity === '2400' ? 308 : 0
        } : null,
        taxForms: formData.taxForms ? {
          formName: formData.taxFormName,
          quantity: formData.taxFormQuantity
        } : null
      },
      
      // Pricing
      pricing: {
        basePrice: calculatePrice(),
        premiumColorUpcharge: [...standardColors, ...premiumColors].find(c => c.value === formData.designColor)?.premium ? 15 : 0,
        envelopePrice: formData.envelopes && formData.envelopeQuantity ? 
          (formData.envelopeQuantity === '250' ? 85 :
           formData.envelopeQuantity === '500' ? 106 :
           formData.envelopeQuantity === '1000' ? 165 :
           formData.envelopeQuantity === '1500' ? 229 :
           formData.envelopeQuantity === '2000' ? 292 : 0) : 0,
        depositFormPrice: formData.depositForms && formData.depositFormQuantity ?
          (formData.depositFormQuantity === '150' ? 52 :
           formData.depositFormQuantity === '300' ? 81 :
           formData.depositFormQuantity === '600' ? 130 :
           formData.depositFormQuantity === '1200' ? 200 :
           formData.depositFormQuantity === '2400' ? 308 : 0) : 0,
        totalPrice: calculateTotal()
      },
      
      // Additional Notes
      notes: formData.otherNotes
    };

    // Create formatted order summary for email/notification
    const orderSummary = `
=== CUSTOM CHECK ORDER ===
Order Number: ${orderData.orderNumber}
Order Date: ${new Date(orderData.orderDate).toLocaleDateString()}

COMPANY INFORMATION:
${orderData.company.name}
${orderData.company.address}
${orderData.company.city}, ${orderData.company.state} ${orderData.company.zip}
Phone: ${orderData.company.phone || 'N/A'}
Fax: ${orderData.company.fax || 'N/A'}

BANK INFORMATION:
${orderData.bank.name}
${orderData.bank.city || 'N/A'}
Routing: ${orderData.bank.routingNumber}
Account: ${orderData.bank.accountNumber}
Starting Check #: ${orderData.bank.startingCheckNumber}

PRODUCT DETAILS:
Check Type: ${orderData.product.checkTypeName} (${orderData.product.checkType})
Quantity: ${orderData.product.quantity}
Duplicates: ${orderData.product.duplicates ? 'Yes' : 'No'}
Packing Order: ${orderData.product.packingOrder}
Design Color: ${[...standardColors, ...premiumColors].find(c => c.value === orderData.product.designColor)?.name || 'N/A'}
Logo Option: ${orderData.product.logoOption}

ADDITIONAL ITEMS:
${orderData.additionalItems.envelopes ? `Envelopes: ${orderData.additionalItems.envelopes.quantity} qty - $${orderData.additionalItems.envelopes.price}` : 'Envelopes: None'}
${orderData.additionalItems.depositForms ? `Deposit Forms: ${orderData.additionalItems.depositForms.quantity} qty - $${orderData.additionalItems.depositForms.price}` : 'Deposit Forms: None'}
${orderData.additionalItems.taxForms ? `Tax Forms: ${orderData.additionalItems.taxForms.formName} - ${orderData.additionalItems.taxForms.quantity} qty` : 'Tax Forms: None'}

PRICING BREAKDOWN:
Base Price: $${orderData.pricing.basePrice}
${orderData.pricing.premiumColorUpcharge > 0 ? `Premium Color: +$${orderData.pricing.premiumColorUpcharge}` : ''}
${orderData.pricing.envelopePrice > 0 ? `Envelopes: +$${orderData.pricing.envelopePrice}` : ''}
${orderData.pricing.depositFormPrice > 0 ? `Deposit Forms: +$${orderData.pricing.depositFormPrice}` : ''}
TOTAL: $${orderData.pricing.totalPrice}

NOTES: ${orderData.notes || 'None'}

=== END ORDER ===
    `.trim();

    console.log('Formatted Order Data:', orderData);
    console.log('Order Summary:', orderSummary);
    
    // Here you would typically send this to your backend/email service
    // For now, we'll show a success message
    const message = `Thank you for your order!

Order Number: ${orderData.orderNumber}
Total: $${orderData.pricing.totalPrice}

We will contact you shortly to confirm your custom check order.`;
    
    // Use a more mobile-friendly alert or consider implementing a toast notification
    if (window.innerWidth < 768) {
      // Mobile-friendly alert
      const mobileAlert = document.createElement('div');
      mobileAlert.className = 'fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50';
      mobileAlert.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
          <div class="text-center mb-4">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg text-gray-900">Order Submitted!</h3>
          </div>
          <div class="space-y-3 text-sm text-gray-600">
            <div class="bg-gray-50 rounded-lg p-3">
              <p><strong>Order #:</strong> ${orderData.orderNumber}</p>
              <p><strong>Total:</strong> $${orderData.pricing.totalPrice}</p>
            </div>
            <p class="text-center">We'll contact you shortly to confirm your custom check order.</p>
          </div>
          <div class="mt-6 space-y-2">
            <button onclick="this.parentElement.parentElement.remove()" class="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Continue Shopping
            </button>
            <button onclick="this.parentElement.parentElement.remove()" class="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Close
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(mobileAlert);
    } else {
      alert(message);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
            {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Custom Check Ordering
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Business Checks
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Order custom business checks with built-in security features. 
              QuickBooks and Sage 100 Contractor compatible with free personalization.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Badge variant="secondary" className="text-primary bg-primary/10 text-xs sm:text-sm">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Security Features
              </Badge>
              <Badge variant="secondary" className="text-primary bg-primary/10 text-xs sm:text-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                QuickBooks Compatible
              </Badge>
              <Badge variant="secondary" className="text-primary bg-primary/10 text-xs sm:text-sm">
                <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Free Personalization
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Progress & Save Section */}
      <section className="py-4 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Order Progress</span>
                <span className="text-sm font-bold text-primary">{calculateProgress()}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-primary-dark h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>

            {/* Save & Resume */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowSaveModal(true)}
                  className="text-sm h-8"
                >
                  <FileText className="w-3 h-3 mr-1" />
                  Save Progress
                </Button>
                {savedProgress && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={loadProgress}
                    className="text-sm h-8"
                  >
                    <ArrowRight className="w-3 h-3 mr-1" />
                    Resume Order
                  </Button>
                )}
              </div>
              
              {/* Quick Templates */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Quick Start:</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      checkType: 'DLT103',
                      quantity: '1000'
                    }));
                  }}
                  className="text-xs h-7"
                >
                  Small Business
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      checkType: 'DLM260',
                      quantity: '2000'
                    }));
                  }}
                  className="text-xs h-7"
                >
                  Medium Business
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-6 lg:py-12 bg-background mobile-safe">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-screen-md lg:max-w-7xl mx-auto w-full px-4">
                                {/* Mobile Order Summary Banner */}
                    <div className="lg:hidden mb-6 w-full">
                      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 w-full">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground">Order Summary</h3>
                              <p className="text-sm text-muted-foreground truncate">
                                {formData.checkType ? `${checkTypes.find(t => t.id === formData.checkType)?.name} - ${formData.quantity || 'Select quantity'}` : 'Select check type and quantity'}
                              </p>
                            </div>
                            <div className="text-right flex-shrink-0 ml-4">
                              <div className="text-2xl font-bold text-primary">
                                ${calculateTotal()}
                              </div>
                              <p className="text-xs text-muted-foreground">Total</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Mobile Order Status */}
                      <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg w-full">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-800">
                            {formData.checkType && formData.quantity ? 'Ready to submit!' : 'Complete all required fields to submit your order'}
                          </span>
                        </div>
                      </div>
                      
                                                                {/* Mobile Quick Actions */}
                      <div className="grid grid-cols-2 gap-3 mb-6 w-full max-w-sm mx-auto">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => document.getElementById('companyName')?.focus()}
                      >
                        <Building2 className="w-4 h-4 mr-2" />
                        Company Info
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => document.getElementById('bankName')?.focus()}
                      >
                        <Banknote className="w-4 h-4 mr-2" />
                        Bank Info
                      </Button>
                    </div>
                    
                    {/* Mobile Form Navigation */}
                    <div className="sm:hidden mb-6 w-full px-2">
                      <div className="flex space-x-2 overflow-x-auto pb-2 justify-center w-full px-2">
                        <button 
                          className="flex-shrink-0 px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          onClick={() => document.getElementById('companyName')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Company
                        </button>
                        <button 
                          className="flex-shrink-0 px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          onClick={() => document.getElementById('bankName')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Bank
                        </button>
                        <button 
                          className="flex-shrink-0 px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          onClick={() => document.querySelector('[data-step="product"]')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Product
                        </button>
                        <button 
                          className="flex-shrink-0 px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          onClick={() => document.querySelector('[data-step="design"]')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Design
                        </button>
                        <button 
                          className="flex-shrink-0 px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          onClick={() => document.querySelector('[data-step="additional"]')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Add-ons
                        </button>
                      </div>
                    </div>
                    </div>
            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-1 w-full flex justify-center lg:block">
              <Card className="shadow-premium max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto lg:mx-0 w-full overflow-hidden sm:rounded-xl rounded-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl font-bold text-foreground">
                    Check Order Form
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Complete this form to order your custom business checks
                  </CardDescription>
                </CardHeader>
                <CardContent className="max-w-sm sm:max-w-none mx-auto w-full px-4 sm:px-6">
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {/* Mobile Progress Indicator */}
                    <div className="sm:hidden mb-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>Step 1 of 6</span>
                        <span>Company Information</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={1} aria-valuemin={1} aria-valuemax={6}>
                        <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '16.67%' }}></div>
                      </div>
                    </div>
                    
                    {/* Step 1: Company Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm">
                          1
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">Company Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <Label htmlFor="companyName">Company Name on Checks *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            required
                            className={`w-full h-10 text-base ${formErrors.companyName ? 'border-red-500' : ''}`}
                            placeholder="Enter your company name"
                          />
                          {formErrors.companyName && (
                            <p className="text-sm text-red-600 mt-1">{formErrors.companyName}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="companyAddress">Company Address *</Label>
                          <Input
                            id="companyAddress"
                            value={formData.companyAddress}
                            onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                            required
                            className={`w-full h-10 text-base ${formErrors.companyAddress ? 'border-red-500' : ''}`}
                            placeholder="Enter your company address"
                          />
                          {formErrors.companyAddress && (
                            <p className="text-sm text-red-600 mt-1">{formErrors.companyAddress}</p>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <Label htmlFor="city">City *</Label>
                                                      <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            required
                            className="h-12 text-base"
                            placeholder="Enter city"
                          />
                          </div>
                          <div>
                            <Label htmlFor="state">State *</Label>
                                                      <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            required
                            className="h-12 text-base"
                            placeholder="Enter state"
                          />
                          </div>
                          <div>
                            <Label htmlFor="zip">ZIP Code *</Label>
                                                      <Input
                            id="zip"
                            value={formData.zip}
                            onChange={(e) => handleInputChange('zip', e.target.value)}
                            required
                            className="h-12 text-base"
                            placeholder="Enter ZIP code"
                          />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="phoneNumber">Phone Number to Print</Label>
                                                      <Input
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                            className="h-12 text-base"
                            placeholder="Enter phone number"
                          />
                          </div>
                          <div>
                            <Label htmlFor="faxNumber">Fax Number to Print</Label>
                                                      <Input
                            id="faxNumber"
                            value={formData.faxNumber}
                            onChange={(e) => handleInputChange('faxNumber', e.target.value)}
                            className="h-12 text-base"
                            placeholder="Enter fax number"
                          />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    {/* Step 2: Bank Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm">
                          2
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">Bank Information</h3>
                      </div>
                      
                      {/* Mobile Step Indicator Update */}
                      <div className="sm:hidden mb-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span>Step 2 of 6</span>
                          <span>Bank Information</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '33.33%' }}></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <Label htmlFor="bankName">Bank Name *</Label>
                          <Input
                            id="bankName"
                            value={formData.bankName}
                            onChange={(e) => handleInputChange('bankName', e.target.value)}
                            required
                            className="w-full h-12 text-base"
                            placeholder="Enter bank name"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="bankCity">Bank City</Label>
                            <Input
                              id="bankCity"
                              value={formData.bankCity}
                              onChange={(e) => handleInputChange('bankCity', e.target.value)}
                              className="h-12 text-base"
                              placeholder="Enter bank city"
                            />
                          </div>
                          <div>
                            <Label htmlFor="startingCheckNumber">Starting Check # *</Label>
                            <Input
                              id="startingCheckNumber"
                              value={formData.startingCheckNumber}
                              onChange={(e) => handleInputChange('startingCheckNumber', e.target.value)}
                              required
                              className="h-12 text-base"
                              placeholder="Enter starting check number"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="routingNumber">Routing Number *</Label>
                            <Input
                              id="routingNumber"
                              value={formData.routingNumber}
                              onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                              required
                              className="h-12 text-base"
                              placeholder="Enter routing number"
                            />
                          </div>
                          <div>
                            <Label htmlFor="accountNumber">Account Number *</Label>
                            <Input
                              id="accountNumber"
                              value={formData.accountNumber}
                              onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                              required
                              className="h-12 text-base"
                              placeholder="Enter account number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Step 3: Product Selection */}
                    <div className="space-y-6" data-step="product">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          3
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Product Selection</h3>
                      </div>
                      
                      {/* Mobile Step Indicator Update */}
                      <div className="sm:hidden mb-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span>Step 3 of 6</span>
                          <span>Product Selection</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>

                      {/* Check Type Selection */}
                      <div className="space-y-4">
                        <Label>Check Type *</Label>
                        {formErrors.checkType && (
                          <p className="text-sm text-red-600">{formErrors.checkType}</p>
                        )}
                        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
                          {checkTypes.map((type) => (
                            <Card 
                              key={type.id}
                              className={`cursor-pointer transition-all hover:shadow-lg ${
                                formData.checkType === type.id ? 'ring-2 ring-primary bg-primary/5' : ''
                              }`}
                              onClick={() => handleInputChange('checkType', type.id)}
                            >
                              <CardContent className="p-4">
                                <div className="text-center sm:text-left">
                                  <h4 className="font-semibold text-primary text-lg">{type.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-2">{type.description}</p>
                                  <div className="mt-3 space-y-1">
                                    {type.features.slice(0, 3).map((feature, index) => (
                                      <p key={index} className="text-xs text-muted-foreground">• {feature}</p>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Selected Check Type Details */}
                      {formData.checkType && (
                        <div className="mt-8 p-6 bg-gradient-subtle rounded-xl border">
                          <div className="grid lg:grid-cols-2 gap-8 items-start">
                            {/* Check Image */}
                            <div className="text-center">
                              <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                                <img 
                                  src={formData.checkType === 'DLT103' ? '/topcheck.png' : 
                                       formData.checkType === 'DLM260' ? '/middlecheck.png' : '/bottomcheck.png'} 
                                  alt={`${checkTypes.find(t => t.id === formData.checkType)?.name} Sample`} 
                                  className="w-full max-w-md mx-auto"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {checkTypes.find(t => t.id === formData.checkType)?.name} Sample
                              </p>
                            </div>
                            
                            {/* Features List */}
                            <div className="space-y-4">
                              <h4 className="font-heading text-xl font-semibold text-foreground">
                                {checkTypes.find(t => t.id === formData.checkType)?.name} Features
                              </h4>
                              <div className="space-y-3">
                                {/* Common Security Feature */}
                                <div className="flex items-start gap-3">
                                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Business checks with built-in security</p>
                                    <p className="text-sm text-muted-foreground">Includes chemically sensitive paper, microprint border, invisible fluorescent fiber, erasure protection, security screen & warning box.</p>
                                  </div>
                                </div>

                                {/* Laser Top Check Specific Features */}
                                {formData.checkType === 'DLT103' && (
                                  <>
                                    <div className="flex items-start gap-3">
                                      <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <div>
                                        <p className="font-medium text-foreground">Preprinted lines</p>
                                        <p className="text-sm text-muted-foreground">Enhance legibility and convenience if you occasionally write checks by hand.</p>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-3">
                                      <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                      <div>
                                        <p className="font-medium text-foreground">2 tear-off vouchers</p>
                                        <p className="text-sm text-muted-foreground">Provide both you and payee a detailed payment record.</p>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {/* Laser Middle Check Specific Features */}
                                {formData.checkType === 'DLM260' && (
                                  <div className="flex items-start gap-3">
                                    <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium text-foreground">Top and bottom tear-off vouchers</p>
                                      <p className="text-sm text-muted-foreground">Provide both you and payee a detailed payment record.</p>
                                    </div>
                                  </div>
                                )}

                                {/* Laser Bottom Check Specific Features */}
                                {formData.checkType === 'DLB135' && (
                                  <div className="flex items-start gap-3">
                                    <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium text-foreground">2 tear-off vouchers</p>
                                      <p className="text-sm text-muted-foreground">Provide both you and payee a detailed payment record.</p>
                                    </div>
                                  </div>
                                )}

                                {/* Common Features */}
                                <div className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Sheet format</p>
                                    <p className="text-sm text-muted-foreground">Fits all standard laser and inkjet printers.</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                  <Hash className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Numbering options</p>
                                    <p className="text-sm text-muted-foreground">Choose consecutive (face up) or reverse (face down) numbering, depending on your printer setup.</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                  <CreditCard className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">
                                      {formData.checkType === 'DLB135' ? 'Multi-part option' : 'Multi-part options'}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {formData.checkType === 'DLB135' 
                                        ? '1 color-coded duplicate on separate sheet for an additional charge.'
                                        : 'Provide up to 2 color-coded duplicates on separate sheets for an additional charge.'
                                      }
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                  <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Free personalization</p>
                                    <p className="text-sm text-muted-foreground">Includes your business imprint plus choice of standard check color, typeface and standard business logo.</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                  <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Additional customization</p>
                                    <p className="text-sm text-muted-foreground">Options include second imprint color & premium check color for an additional charge. Custom logo also available.</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Optional TamperGuard Plus premium check paper</p>
                                    <p className="text-sm text-muted-foreground">Offers enhanced security for an additional charge.</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="font-medium text-foreground">Extra security measure</p>
                                    <p className="text-sm text-muted-foreground">All orders go through proprietary screening to prevent unauthorized orders.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Pricing Table */}
                      <div className="mt-6 p-6 bg-gradient-subtle rounded-xl border">
                        <div className="text-center mb-4">
                          <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Pricing</h4>
                          <p className="text-sm text-muted-foreground">Tax & Shipping not included</p>
                          <p className="text-sm text-primary font-medium mt-1">DLT103, DLM260, DLB135</p>
                          <p className="text-xs text-muted-foreground">*DLB135 does not come in 3 Part</p>
                        </div>
                        
                        <div className="overflow-x-auto mx-0 px-2">
                          <table className="w-full text-sm min-w-full sm:min-w-[600px]">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-2 font-medium">Qty</th>
                                <th className="text-center py-2 font-medium">1 Part</th>
                                <th className="text-center py-2 font-medium">2 Part</th>
                                <th className="text-center py-2 font-medium">3 Part*</th>
                              </tr>
                            </thead>
                            <tbody>
                              {quantities.map((qty) => (
                                <tr key={qty.value} className="border-b border-border/50 hover:bg-background/50">
                                  <td className="py-2 font-medium">{qty.label}</td>
                                  <td className="text-center py-2 text-primary">${qty.price['1']}</td>
                                  <td className="text-center py-2 text-primary">${qty.price['2']}</td>
                                  <td className="text-center py-2 text-primary">${qty.price['3']}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        {/* Mobile-friendly pricing cards */}
                        <div className="sm:hidden space-y-3 mt-4 max-w-lg mx-auto">
                          {quantities.map((qty) => (
                            <Card key={qty.value} className="p-4">
                              <div className="text-center">
                                <h4 className="font-semibold text-lg mb-2">{qty.label}</h4>
                                <div className="grid grid-cols-3 gap-2 text-sm">
                                  <div className="bg-primary/10 rounded p-2">
                                    <div className="font-medium text-primary">1 Part</div>
                                    <div className="text-lg font-bold">${qty.price['1']}</div>
                                  </div>
                                  <div className="bg-primary/10 rounded p-2">
                                    <div className="font-medium text-primary">2 Part</div>
                                    <div className="text-lg font-bold">${qty.price['2']}</div>
                                  </div>
                                  <div className="bg-primary/10 rounded p-2">
                                    <div className="font-medium text-primary">3 Part</div>
                                    <div className="text-lg font-bold">${qty.price['3']}</div>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Quantity and Options */}
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="quantity">Quantity *</Label>
                          {formErrors.quantity && (
                            <p className="text-sm text-red-600 mb-2">{formErrors.quantity}</p>
                          )}
                          <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                            <SelectTrigger className="h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors shadow-sm">
                              <SelectValue placeholder="Select quantity" className="text-base" />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-2 border-border shadow-lg">
                              {quantities.map((qty) => (
                                <SelectItem key={qty.value} value={qty.value} className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                  <div className="flex justify-between items-center w-full">
                                    <span className="font-medium">{qty.label}</span>
                                    <span className="text-primary font-semibold">${qty.price[formData.duplicates ? '2' : '1']}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Packing Order</Label>
                          <RadioGroup value={formData.packingOrder} onValueChange={(value) => handleInputChange('packingOrder', value)}>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="standard" id="standard" />
                                <Label htmlFor="standard">Standard Packing Order</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="reverse" id="reverse" />
                                <Label htmlFor="reverse">Reverse Packing Order</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                                              <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                          <Checkbox 
                            id="duplicates" 
                            checked={formData.duplicates}
                            onCheckedChange={(checked) => handleInputChange('duplicates', checked)}
                          />
                          <Label htmlFor="duplicates" className="cursor-pointer">Include Duplicates (2-Part or 3-Part)</Label>
                        </div>
                    </div>

                    <Separator />

                    {/* Step 4: Design Options */}
                    <div className="space-y-6" data-step="design">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          4
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Design Options</h3>
                      </div>
                      
                      {/* Mobile Step Indicator Update */}
                      <div className="sm:hidden mb-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span>Step 4 of 6</span>
                          <span>Design Options</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '66.67%' }}></div>
                        </div>
                      </div>

                      <Tabs defaultValue="standard" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 h-12">
                          <TabsTrigger value="standard" className="text-sm sm:text-base font-medium">Standard Colors</TabsTrigger>
                          <TabsTrigger value="premium" className="text-sm sm:text-base font-medium">Premium Colors (+$15)</TabsTrigger>
                        </TabsList>
                        <TabsContent value="standard" className="space-y-4">
                          <div className="grid mobile-toolbar-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto min-w-0">
                            <p className="text-sm text-muted-foreground col-span-full text-center mb-3">
                              Tap a color to select it
                            </p>
                            {standardColors.map((color) => (
                              <div
                                key={color.value}
                                className={`border-2 rounded-lg p-2 cursor-pointer transition-all hover:shadow-md min-w-0 ${
                                  formData.designColor === color.value ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                                }`}
                                onClick={() => handleInputChange('designColor', color.value)}
                              >
                                <div className="aspect-square w-full rounded mb-1.5 overflow-hidden bg-gray-50">
                                  <img 
                                    src={color.image} 
                                    alt={color.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <p className="text-xs font-medium text-center leading-tight">{color.name}</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="premium" className="space-y-4">
                          <div className="grid mobile-toolbar-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 max-w-4xl mx-auto min-w-0">
                            <p className="text-sm text-muted-foreground col-span-full text-center mb-3">
                              Premium colors include a $15 upcharge
                            </p>
                            {premiumColors.map((color) => (
                              <div
                                key={color.value}
                                className={`border-2 rounded-lg p-2 cursor-pointer transition-all hover:shadow-md min-w-0 ${
                                  formData.designColor === color.value ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                                }`}
                                onClick={() => handleInputChange('designColor', color.value)}
                              >
                                <div className="aspect-square w-full rounded mb-1.5 overflow-hidden bg-gray-50">
                                  <img 
                                    src={color.image} 
                                    alt={color.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <p className="text-xs font-medium text-center leading-tight">{color.name}</p>
                                <p className="text-xs text-primary font-semibold text-center mt-0.5">+$15</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>

                      {/* Logo Upload Section */}
                      <div className="space-y-4 mt-8">
                        <div className="flex items-center gap-3">
                          <h4 className="font-semibold text-foreground">Logo Options</h4>
                          <Badge variant="secondary" className="text-xs">Free</Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Logo Upload */}
                          <div className="space-y-4">
                            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                              <input
                                type="file"
                                id="logoUpload"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    // Handle logo upload
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                      setFormData(prev => ({
                                        ...prev,
                                        logoFile: file,
                                        logoPreview: e.target?.result as string
                                      }));
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
                              <label htmlFor="logoUpload" className="cursor-pointer">
                                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                  <FileText className="w-8 h-8 text-accent-foreground" />
                                </div>
                                <p className="font-medium text-foreground mb-2">Upload Your Logo</p>
                                <p className="text-sm text-muted-foreground">
                                  PNG, JPG, or PDF up to 5MB
                                </p>
                              </label>
                            </div>
                            
                            {formData.logoPreview && (
                              <div className="bg-accent/20 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                  <img 
                                    src={formData.logoPreview} 
                                    alt="Logo Preview" 
                                    className="w-12 h-12 object-contain bg-white rounded"
                                  />
                                  <div className="flex-1">
                                    <p className="font-medium text-sm">{formData.logoFile?.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                      {(formData.logoFile?.size || 0) / 1024 / 1024} MB
                                    </p>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      setFormData(prev => ({
                                        ...prev,
                                        logoFile: null,
                                        logoPreview: ''
                                      }));
                                    }}
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Logo Options */}
                          <div className="space-y-4">
                            <div className="bg-accent/20 rounded-lg p-4">
                              <h5 className="font-medium text-foreground mb-3">Logo Placement Options</h5>
                              <RadioGroup value={formData.logoOption} onValueChange={(value) => handleInputChange('logoOption', value)}>
                                <div className="space-y-3">
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="standard" id="standard-logo" />
                                    <Label htmlFor="standard-logo" className="text-sm">
                                      <span className="font-medium">Standard Placement</span>
                                      <span className="text-muted-foreground block">Top left corner (included)</span>
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="premium" id="premium-logo" />
                                    <Label htmlFor="premium-logo" className="text-sm">
                                      <span className="font-medium">Premium Placement</span>
                                      <span className="text-muted-foreground block">Custom positioning (+$25)</span>
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="none" id="no-logo" />
                                    <Label htmlFor="no-logo" className="text-sm">
                                      <span className="font-medium">No Logo</span>
                                      <span className="text-muted-foreground block">Clean design without logo</span>
                                    </Label>
                                  </div>
                                </div>
                              </RadioGroup>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-medium text-blue-800 mb-1">Logo Guidelines</h5>
                                  <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• High resolution (300 DPI minimum)</li>
                                    <li>• Vector format preferred (EPS, SVG)</li>
                                    <li>• Simple designs work best</li>
                                    <li>• Maximum size: 1.5" x 1.5"</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Step 5: Additional Items */}
                    <div className="space-y-6" data-step="additional">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          5
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Additional Items</h3>
                      </div>
                      
                      {/* Mobile Step Indicator Update */}
                      <div className="sm:hidden mb-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span>Step 5 of 6</span>
                          <span>Additional Items</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '83.33%' }}></div>
                        </div>
                      </div>

                      {/* Envelopes */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                          <Checkbox 
                            id="envelopes" 
                            checked={formData.envelopes}
                            onCheckedChange={(checked) => handleInputChange('envelopes', checked)}
                          />
                          <Label htmlFor="envelopes" className="text-lg font-medium cursor-pointer">Envelopes</Label>
                        </div>
                        {formData.envelopes && (
                          <div className="ml-0 sm:ml-6 space-y-4">
                            <div>
                              <Label htmlFor="envelopeQuantity">Quantity</Label>
                              <Select value={formData.envelopeQuantity} onValueChange={(value) => handleInputChange('envelopeQuantity', value)}>
                                <SelectTrigger className="h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors shadow-sm">
                                  <SelectValue placeholder="Select quantity" className="text-base" />
                                </SelectTrigger>
                                <SelectContent className="bg-background border-2 border-border shadow-lg">
                                  <SelectItem value="250" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                    <div className="flex justify-between items-center w-full">
                                      <span className="font-medium">250 Envelopes</span>
                                      <span className="text-primary font-semibold">$85</span>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="500" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                    <div className="flex justify-between items-center w-full">
                                      <span className="font-medium">500 Envelopes</span>
                                      <span className="text-primary font-semibold">$106</span>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="1000" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                    <div className="flex justify-between items-center w-full">
                                      <span className="font-medium">1,000 Envelopes</span>
                                      <span className="text-primary font-semibold">$165</span>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="1500" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                    <div className="flex justify-between items-center w-full">
                                      <span className="font-medium">1,500 Envelopes</span>
                                      <span className="text-primary font-semibold">$229</span>
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="2000" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                    <div className="flex justify-between items-center w-full">
                                      <span className="font-medium">2,000 Envelopes</span>
                                      <span className="text-primary font-semibold">$292</span>
                                    </div>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Card className="bg-blue-50 border-blue-200">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                                  <div>
                                    <h4 className="font-semibold text-blue-800">Double Window Confidential Envelopes</h4>
                                    <p className="text-sm text-blue-700">Self-seal, 8 5/8 x 3 5/8". Tinted inside pattern keeps confidential information secure.</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>

                      {/* Deposit Forms */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                          <Checkbox 
                            id="depositForms" 
                            checked={formData.depositForms}
                            onCheckedChange={(checked) => handleInputChange('depositForms', checked)}
                          />
                          <Label htmlFor="depositForms" className="text-lg font-medium cursor-pointer">Deposit Forms</Label>
                        </div>
                        {formData.depositForms && (
                          <div className="ml-0 sm:ml-6 space-y-4">
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="depositFormQuantity">Quantity</Label>
                                <Select value={formData.depositFormQuantity} onValueChange={(value) => handleInputChange('depositFormQuantity', value)}>
                                  <SelectTrigger className="h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors shadow-sm">
                                    <SelectValue placeholder="Select quantity" className="text-base" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-background border-2 border-border shadow-lg">
                                    <SelectItem value="150" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                      <div className="flex justify-between items-center w-full">
                                        <span className="font-medium">150 Books (2-Part)</span>
                                        <span className="text-primary font-semibold">$52</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="300" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                      <div className="flex justify-between items-center w-full">
                                        <span className="font-medium">300 Books (2-Part)</span>
                                        <span className="text-primary font-semibold">$81</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="600" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                      <div className="flex justify-between items-center w-full">
                                        <span className="font-medium">600 Books (2-Part)</span>
                                        <span className="text-primary font-semibold">$130</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="1200" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                      <div className="flex justify-between items-center w-full">
                                        <span className="font-medium">1,200 Books (2-Part)</span>
                                        <span className="text-primary font-semibold">$200</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="2400" className="text-base py-3 hover:bg-accent focus:bg-accent cursor-pointer">
                                      <div className="flex justify-between items-center w-full">
                                        <span className="font-medium">2,400 Books (2-Part)</span>
                                        <span className="text-primary font-semibold">$308</span>
                                      </div>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox 
                                  id="depositFormDuplicates" 
                                  checked={formData.depositFormDuplicates}
                                  onCheckedChange={(checked) => handleInputChange('depositFormDuplicates', checked)}
                                />
                                <Label htmlFor="depositFormDuplicates">Include Duplicates</Label>
                              </div>
                            </div>
                            <Card className="bg-green-50 border-green-200">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <FileText className="w-5 h-5 text-green-600 mt-0.5" />
                                  <div>
                                    <h4 className="font-semibold text-green-800">Booked Deposit Tickets</h4>
                                    <p className="text-sm text-green-700">8 7/8 x 3 3/8", 2-Part Duplicate. Includes 17 check entry lines plus cash and coin count.</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>

                      {/* Tax Forms */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                          <Checkbox 
                            id="taxForms" 
                            checked={formData.taxForms}
                            onCheckedChange={(checked) => handleInputChange('taxForms', checked)}
                          />
                          <Label htmlFor="taxForms" className="text-lg font-medium cursor-pointer">Tax Forms</Label>
                        </div>
                        {formData.taxForms && (
                          <div className="ml-0 sm:ml-6 space-y-4">
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="taxFormName">Form Name</Label>
                                <Input
                                  id="taxFormName"
                                  value={formData.taxFormName}
                                  onChange={(e) => handleInputChange('taxFormName', e.target.value)}
                                  placeholder="e.g., W-2, 1099"
                                />
                              </div>
                              <div>
                                <Label htmlFor="taxFormQuantity">Quantity</Label>
                                <Input
                                  id="taxFormQuantity"
                                  type="number"
                                  value={formData.taxFormQuantity}
                                  onChange={(e) => handleInputChange('taxFormQuantity', e.target.value)}
                                  placeholder="Number of forms"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <Separator />

                    {/* Step 6: Other Notes */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          6
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Additional Notes</h3>
                      </div>
                      
                      {/* Mobile Step Indicator Update */}
                      <div className="sm:hidden mb-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                          <span>Step 6 of 6</span>
                          <span>Additional Notes</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="otherNotes">Special Instructions or Additional Items</Label>
                        <Textarea
                          id="otherNotes"
                          value={formData.otherNotes}
                          onChange={(e) => handleInputChange('otherNotes', e.target.value)}
                          placeholder="Any special instructions, additional items, or notes for your order..."
                          rows={4}
                          className="min-h-[120px] text-base"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button type="submit" size="lg" className="w-full btn-primary">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Submit Check Order
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    
                    {/* Mobile Floating Submit Button */}
                    <div className="fixed bottom-4 left-0 right-0 sm:hidden z-40 max-w-md mx-auto w-full px-4">
                      <Button type="submit" size="lg" className="w-full btn-primary shadow-lg">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Submit Order
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    
                    {/* Mobile Help Section */}
                    <div className="sm:hidden mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-md mx-auto">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
                          <p className="text-sm text-blue-700 mb-3">
                            If you have any questions about your order or need assistance, our team is here to help.
                          </p>
                          <div className="space-y-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full text-blue-700 border-blue-300"
                              onClick={() => window.location.href = 'tel:+1-713-555-0123'}
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Call for Help
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full text-blue-700 border-blue-300"
                              onClick={() => window.location.href = 'mailto:support@clearledger.com'}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Email Support
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Form Tips */}
                    <div className="sm:hidden mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-lg mx-auto">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-2">Quick Tips</h4>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• All fields marked with * are required</li>
                            <li>• Use the navigation buttons above to jump between sections</li>
                            <li>• Your order summary updates in real-time</li>
                            <li>• Need help? Use the support buttons above</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 order-2 lg:order-2 w-full">
              <div className="lg:sticky lg:top-8 mb-6 lg:mb-0">
                <Card className="shadow-premium max-w-md mx-auto lg:mx-0 w-full">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl font-bold text-foreground">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Selected Product */}
                    {formData.checkType && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-primary" />
                          <div>
                            <h4 className="font-semibold">
                              {checkTypes.find(t => t.id === formData.checkType)?.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {formData.quantity} checks
                              {formData.duplicates && ' (with duplicates)'}
                            </p>
                          </div>
                        </div>
                        
                        {/* Design Color */}
                        {formData.designColor && (
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded border overflow-hidden">
                              <img 
                                src={[...standardColors, ...premiumColors].find(c => c.value === formData.designColor)?.image || '/gray.png'} 
                                alt="Selected color"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm">
                              {[...standardColors, ...premiumColors].find(c => c.value === formData.designColor)?.name}
                              {premiumColors.find(c => c.value === formData.designColor) && ' (+$15)'}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Additional Items */}
                    {(formData.envelopes || formData.depositForms || formData.taxForms) && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Additional Items:</h4>
                        {formData.envelopes && (
                          <div className="flex justify-between text-sm">
                            <span>Envelopes ({formData.envelopeQuantity})</span>
                            <span className="font-medium">
                              ${formData.envelopeQuantity === '250' ? '85' : 
                                formData.envelopeQuantity === '500' ? '106' :
                                formData.envelopeQuantity === '1000' ? '165' :
                                formData.envelopeQuantity === '1500' ? '229' :
                                formData.envelopeQuantity === '2000' ? '292' : '0'}
                            </span>
                          </div>
                        )}
                        {formData.depositForms && (
                          <div className="flex justify-between text-sm">
                            <span>Deposit Forms ({formData.depositFormQuantity})</span>
                            <span className="font-medium">
                              ${formData.depositFormQuantity === '150' ? '52' :
                                formData.depositFormQuantity === '300' ? '81' :
                                formData.depositFormQuantity === '600' ? '130' :
                                formData.depositFormQuantity === '1200' ? '200' :
                                formData.depositFormQuantity === '2400' ? '308' : '0'}
                            </span>
                          </div>
                        )}
                        {formData.taxForms && (
                          <div className="flex justify-between text-sm">
                            <span>Tax Forms</span>
                            <span className="font-medium">Contact for pricing</span>
                          </div>
                        )}
                      </div>
                    )}

                    <Separator />

                    {/* Pricing */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Subtotal:</span>
                        <span className="font-bold text-primary">${calculateTotal()}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        * Tax and shipping not included
                      </p>
                    </div>

                    {/* Security Notice */}
                    <Card className="bg-yellow-50 border-yellow-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-yellow-800">Security Features</h4>
                            <p className="text-sm text-yellow-700">
                              All orders include built-in security: chemically sensitive paper, microprint border, 
                              invisible fluorescent fiber, erasure protection, and security screening.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Mobile Quick Actions */}
                    <div className="lg:hidden space-y-3">
                      <Button variant="outline" className="w-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ArrowRight className="w-4 h-4 mr-2 rotate-90" />
                        Back to Top
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call for Quote
                      </Button>
                    </div>

                    {/* Contact Info */}
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-800">Need Help?</h4>
                            <p className="text-sm text-blue-700">
                              Contact us for custom orders, bulk pricing, or any questions about your check order.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Information Section */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about ordering custom business checks
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* FAQ Column */}
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-3">How long does it take to receive my checks?</h3>
                  <p className="text-muted-foreground">Standard orders ship within 5-7 business days. Rush orders are available for an additional fee with 2-3 business day turnaround.</p>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-3">Are these checks compatible with my accounting software?</h3>
                  <p className="text-muted-foreground">Yes! Our checks are fully compatible with QuickBooks Online, QuickBooks Desktop, and Sage 100 Contractor. They work with all standard laser printers.</p>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-3">What security features are included?</h3>
                  <p className="text-muted-foreground">All checks include chemically sensitive paper, microprint borders, invisible fluorescent fibers, erasure protection, security screen, and warning box.</p>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-3">Can I include my company logo?</h3>
                  <p className="text-muted-foreground">Yes! We include one standard logo at no additional cost. Premium logo placement and custom designs are available for an additional fee.</p>
                </div>
              </div>

              {/* Security & Compatibility Info */}
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    Security Features
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Chemically sensitive paper prevents alteration</li>
                    <li>• Microprint borders for counterfeit detection</li>
                    <li>• Invisible fluorescent fibers under UV light</li>
                    <li>• Erasure protection technology</li>
                    <li>• Security screen and warning box</li>
                    <li>• Watermark protection</li>
                  </ul>
                </div>

                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Software Compatibility
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• QuickBooks Online (all versions)</li>
                    <li>• QuickBooks Desktop (Pro, Premier, Enterprise)</li>
                    <li>• Sage 100 Contractor</li>
                    <li>• Sage 50 (Peachtree)</li>
                    <li>• Microsoft Dynamics GP</li>
                    <li>• Any accounting software with check printing</li>
                  </ul>
                </div>

                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Package className="w-5 h-5 text-primary mr-2" />
                    Order Timeline
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Order Processing:</span>
                      <span className="font-medium">1-2 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Production:</span>
                      <span className="font-medium">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Shipping:</span>
                      <span className="font-medium">1-3 business days</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold text-primary">5-10 business days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Security & Quality
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Custom Checks?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional business checks with advanced security features and complete customization options
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 card-service group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Built-in Security</h3>
              <p className="text-muted-foreground">
                Chemically sensitive paper, microprint borders, invisible fluorescent fibers, 
                and erasure protection to prevent fraud.
              </p>
            </Card>

            <Card className="text-center p-6 card-service group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Software Compatible</h3>
              <p className="text-muted-foreground">
                Fully compatible with QuickBooks and Sage 100 Contractor. 
                Seamless integration with your accounting software.
              </p>
            </Card>

            <Card className="text-center p-6 card-service group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Free Personalization</h3>
              <p className="text-muted-foreground">
                Includes your business imprint, choice of colors and typefaces, 
                and standard business logo at no extra cost.
              </p>
            </Card>

            <Card className="text-center p-6 card-service group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Tear-off Vouchers</h3>
              <p className="text-muted-foreground">
                Built-in vouchers provide detailed payment records for both you 
                and your payee, improving record keeping.
              </p>
            </Card>

            <Card className="text-center p-6 card-service group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Matching Envelopes</h3>
              <p className="text-muted-foreground">
                Double window confidential envelopes with security tinting 
                to protect sensitive information during mailing.
              </p>
            </Card>

            <Card className="text-center p-6 card-service group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Deposit Tickets</h3>
              <p className="text-muted-foreground">
                Professional deposit tickets with MICR processing compatibility 
                and multiple entry lines for efficient banking.
              </p>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Save Progress Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg p-6 max-w-md w-full">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Save Your Progress
            </h3>
            <p className="text-muted-foreground mb-4">
              Enter your email to save your progress. You can return later to complete your order.
            </p>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={saveEmail}
              onChange={(e) => setSaveEmail(e.target.value)}
              className="mb-4"
            />
            <div className="flex gap-3">
              <Button onClick={saveProgress} className="flex-1">
                Save Progress
              </Button>
              <Button variant="outline" onClick={() => setShowSaveModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CheckOrdering = () => {
  const breadcrumbData = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Check Ordering', url: './check-ordering' }
  ];

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Custom Check Ordering - ClearLedger Solutions"
        description="Order custom business checks with professional security features. QuickBooks and Sage 100 Contractor compatible. Free personalization and logo options available."
        keywords="custom business checks, QuickBooks checks, Sage 100 checks, check ordering, business checks, laser checks, check printing"
        canonical="./check-ordering"
        schema={[
          getServiceSchema("Custom Check Ordering", "Professional custom business checks with security features"),
          getBreadcrumbSchema(breadcrumbData)
        ]}
      />
      <Header />
      <div className="pt-20">
        <CheckOrderingContent />
      </div>
      <Footer />
    </main>
  );
};

export default CheckOrdering; 