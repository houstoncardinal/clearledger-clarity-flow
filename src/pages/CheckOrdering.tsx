import React, { useState } from 'react';
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
    otherNotes: ''
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
    { name: 'Gray Herringbone', value: 'gray-herringbone', color: '#f5f5f5', premium: false },
    { name: 'Blue Herringbone', value: 'blue-herringbone', color: '#e6f3ff', premium: false },
    { name: 'Green Herringbone', value: 'green-herringbone', color: '#e6ffe6', premium: false },
    { name: 'Maroon Herringbone', value: 'maroon-herringbone', color: '#ffe6e6', premium: false },
    { name: 'Tan Herringbone', value: 'tan-herringbone', color: '#f5f5dc', premium: false },
    { name: 'Purple Herringbone', value: 'purple-herringbone', color: '#f0e6ff', premium: false },
    { name: 'Yellow Herringbone', value: 'yellow-herringbone', color: '#ffffe6', premium: false }
  ];

  const premiumColors = [
    { name: 'American Spirit', value: 'american-spirit', color: 'linear-gradient(45deg, #e6f3ff, #ffe6f3, #ffffff)', premium: true },
    { name: 'Antique', value: 'antique', color: '#f5f5dc', premium: true },
    { name: 'Blue Marble', value: 'blue-marble', color: '#e6f3ff', premium: true },
    { name: 'TamperGuard Plus - Blue', value: 'tamperguard-blue', color: '#e6f3ff', premium: true },
    { name: 'Gentry', value: 'gentry', color: '#f5f5f5', premium: true },
    { name: 'Green Marble', value: 'green-marble', color: '#e6ffe6', premium: true },
    { name: 'Monterey', value: 'monterey', color: '#e6f3f5', premium: true }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    alert(`Thank you for your order!\n\nOrder Number: ${orderData.orderNumber}\nTotal: $${orderData.pricing.totalPrice}\n\nWe will contact you shortly to confirm your custom check order.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Custom Check Ordering
              </span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Business Checks
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Order custom business checks with built-in security features. 
              QuickBooks and Sage 100 Contractor compatible with free personalization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-primary bg-primary/10">
                <Shield className="w-4 h-4 mr-2" />
                Security Features
              </Badge>
              <Badge variant="secondary" className="text-primary bg-primary/10">
                <CheckCircle className="w-4 h-4 mr-2" />
                QuickBooks Compatible
              </Badge>
              <Badge variant="secondary" className="text-primary bg-primary/10">
                <Package className="w-4 h-4 mr-2" />
                Free Personalization
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-8 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Form */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <Card className="shadow-premium">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl font-bold text-foreground">
                    Check Order Form
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Complete this form to order your custom business checks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Step 1: Company Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          1
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Company Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <Label htmlFor="companyName">Company Name on Checks *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <Label htmlFor="companyAddress">Company Address *</Label>
                          <Input
                            id="companyAddress"
                            value={formData.companyAddress}
                            onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code *</Label>
                          <Input
                            id="zip"
                            value={formData.zip}
                            onChange={(e) => handleInputChange('zip', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phoneNumber">Phone Number to Print</Label>
                          <Input
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="faxNumber">Fax Number to Print</Label>
                          <Input
                            id="faxNumber"
                            value={formData.faxNumber}
                            onChange={(e) => handleInputChange('faxNumber', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Step 2: Bank Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          2
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Bank Information</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <Label htmlFor="bankName">Bank Name *</Label>
                          <Input
                            id="bankName"
                            value={formData.bankName}
                            onChange={(e) => handleInputChange('bankName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="bankCity">Bank City</Label>
                          <Input
                            id="bankCity"
                            value={formData.bankCity}
                            onChange={(e) => handleInputChange('bankCity', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="routingNumber">Routing Number *</Label>
                          <Input
                            id="routingNumber"
                            value={formData.routingNumber}
                            onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="accountNumber">Account Number *</Label>
                          <Input
                            id="accountNumber"
                            value={formData.accountNumber}
                            onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="startingCheckNumber">Starting Check Number *</Label>
                          <Input
                            id="startingCheckNumber"
                            value={formData.startingCheckNumber}
                            onChange={(e) => handleInputChange('startingCheckNumber', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Step 3: Product Selection */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          3
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Product Selection</h3>
                      </div>

                      {/* Check Type Selection */}
                      <div className="space-y-4">
                        <Label>Check Type *</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {checkTypes.map((type) => (
                            <Card 
                              key={type.id}
                              className={`cursor-pointer transition-all hover:shadow-lg ${
                                formData.checkType === type.id ? 'ring-2 ring-primary bg-primary/5' : ''
                              }`}
                              onClick={() => handleInputChange('checkType', type.id)}
                            >
                              <CardContent className="p-4">
                                <div className="text-center">
                                  <h4 className="font-semibold text-primary">{type.name}</h4>
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
                        
                        <div className="overflow-x-auto -mx-4 sm:mx-0">
                          <table className="w-full text-sm min-w-[600px]">
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
                      </div>

                      {/* Quantity and Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="quantity">Quantity *</Label>
                          <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select quantity" />
                            </SelectTrigger>
                            <SelectContent>
                              {quantities.map((qty) => (
                                <SelectItem key={qty.value} value={qty.value}>
                                  {qty.label} - ${qty.price[formData.duplicates ? '2' : '1']}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Packing Order</Label>
                          <RadioGroup value={formData.packingOrder} onValueChange={(value) => handleInputChange('packingOrder', value)}>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="standard" id="standard" />
                              <Label htmlFor="standard">Standard Packing Order</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="reverse" id="reverse" />
                              <Label htmlFor="reverse">Reverse Packing Order</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="duplicates" 
                          checked={formData.duplicates}
                          onCheckedChange={(checked) => handleInputChange('duplicates', checked)}
                        />
                        <Label htmlFor="duplicates">Include Duplicates (2-Part or 3-Part)</Label>
                      </div>
                    </div>

                    <Separator />

                    {/* Step 4: Design Options */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          4
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Design Options</h3>
                      </div>

                      <Tabs defaultValue="standard" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="standard">Standard Colors</TabsTrigger>
                          <TabsTrigger value="premium">Premium Colors (+$15)</TabsTrigger>
                        </TabsList>
                        <TabsContent value="standard" className="space-y-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                            {standardColors.map((color) => (
                              <div
                                key={color.value}
                                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                                  formData.designColor === color.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                                }`}
                                onClick={() => handleInputChange('designColor', color.value)}
                              >
                                <div 
                                  className="w-full h-12 rounded mb-2"
                                  style={{ backgroundColor: color.color }}
                                ></div>
                                <p className="text-sm font-medium text-center">{color.name}</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="premium" className="space-y-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                            {premiumColors.map((color) => (
                              <div
                                key={color.value}
                                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                                  formData.designColor === color.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                                }`}
                                onClick={() => handleInputChange('designColor', color.value)}
                              >
                                <div 
                                  className="w-full h-12 rounded mb-2"
                                  style={{ 
                                    background: color.color.includes('gradient') ? color.color : color.color 
                                  }}
                                ></div>
                                <p className="text-sm font-medium text-center">{color.name}</p>
                                <p className="text-xs text-primary text-center">+$15</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <Separator />

                    {/* Step 5: Additional Items */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                          5
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-foreground">Additional Items</h3>
                      </div>

                      {/* Envelopes */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="envelopes" 
                            checked={formData.envelopes}
                            onCheckedChange={(checked) => handleInputChange('envelopes', checked)}
                          />
                          <Label htmlFor="envelopes" className="text-lg font-medium">Envelopes</Label>
                        </div>
                        {formData.envelopes && (
                          <div className="ml-6 space-y-4">
                            <div>
                              <Label htmlFor="envelopeQuantity">Quantity</Label>
                              <Select value={formData.envelopeQuantity} onValueChange={(value) => handleInputChange('envelopeQuantity', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select quantity" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="250">250 Envelopes - $85</SelectItem>
                                  <SelectItem value="500">500 Envelopes - $106</SelectItem>
                                  <SelectItem value="1000">1,000 Envelopes - $165</SelectItem>
                                  <SelectItem value="1500">1,500 Envelopes - $229</SelectItem>
                                  <SelectItem value="2000">2,000 Envelopes - $292</SelectItem>
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
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="depositForms" 
                            checked={formData.depositForms}
                            onCheckedChange={(checked) => handleInputChange('depositForms', checked)}
                          />
                          <Label htmlFor="depositForms" className="text-lg font-medium">Deposit Forms</Label>
                        </div>
                        {formData.depositForms && (
                          <div className="ml-6 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="depositFormQuantity">Quantity</Label>
                                <Select value={formData.depositFormQuantity} onValueChange={(value) => handleInputChange('depositFormQuantity', value)}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select quantity" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="150">150 Books - $52 (2-Part)</SelectItem>
                                    <SelectItem value="300">300 Books - $81 (2-Part)</SelectItem>
                                    <SelectItem value="600">600 Books - $130 (2-Part)</SelectItem>
                                    <SelectItem value="1200">1,200 Books - $200 (2-Part)</SelectItem>
                                    <SelectItem value="2400">2,400 Books - $308 (2-Part)</SelectItem>
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
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="taxForms" 
                            checked={formData.taxForms}
                            onCheckedChange={(checked) => handleInputChange('taxForms', checked)}
                          />
                          <Label htmlFor="taxForms" className="text-lg font-medium">Tax Forms</Label>
                        </div>
                        {formData.taxForms && (
                          <div className="ml-6 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      
                      <div>
                        <Label htmlFor="otherNotes">Special Instructions or Additional Items</Label>
                        <Textarea
                          id="otherNotes"
                          value={formData.otherNotes}
                          onChange={(e) => handleInputChange('otherNotes', e.target.value)}
                          placeholder="Any special instructions, additional items, or notes for your order..."
                          rows={4}
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
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-8 mb-6 lg:mb-0">
                <Card className="shadow-premium">
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
                            <div 
                              className="w-6 h-6 rounded border"
                              style={{ 
                                backgroundColor: [...standardColors, ...premiumColors].find(c => c.value === formData.designColor)?.color || '#f5f5f5'
                              }}
                            ></div>
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

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Security & Quality
              </span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Custom Checks?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional business checks with advanced security features and complete customization options
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      </section>
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
    <main className="min-h-screen bg-background">
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