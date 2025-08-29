import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, Eye, EyeOff } from 'lucide-react';
import { 
  createProfessionalOrderTable, 
  createTextOrderSummary, 
  generateOrderHash, 
  validateOrderData,
  type OrderData 
} from '@/utils/orderFormatter';

const OrderFormatDemo = () => {
  const [showSensitiveData, setShowSensitiveData] = useState(false);

  // Sample order data for demonstration
  const sampleOrderData: OrderData = {
    orderDate: new Date().toISOString(),
    orderNumber: 'CHK-1756502426958',
    company: {
      name: 'Demo Company Inc.',
      address: '123 Business Street',
      city: 'Demo City',
      state: 'TX',
      zip: '75000',
      phone: '(903) 815-9488'
    },
    bank: {
      name: 'Demo Bank',
      city: 'Demo City',
      routingNumber: '123456789',
      accountNumber: '987654321',
      startingCheckNumber: '1000'
    },
    product: {
      checkType: 'DLT103',
      checkTypeName: 'Laser Top Checks',
      quantity: '1000',
      duplicates: true,
      packingOrder: 'standard',
      designColor: 'green-herringbone',
      logoOption: 'none'
    },
    additionalItems: {
      envelopes: null,
      depositForms: null,
      taxForms: null
    },
    pricing: {
      basePrice: 389,
      premiumColorUpcharge: 0,
      envelopePrice: 0,
      depositFormPrice: 0,
      totalPrice: 389
    },
    notes: 'test'
  };

  const oldFormat = `Company Name:
Demo Company Inc.

Company Address:
123 Business Street

City:
Demo City

State:
TX

Zip:
75000

Phone Number:
(903) 815-9488



Bank Name:
Demo Bank

Bank City:
Demo City

Routing Number:
123456789

Account Number:
987654321

Starting Check Number:
1000

Check Type:
DLT103

Check Type Name:
Laser Top Checks

Quantity:
1000

Duplicates:
Yes

Packing Order:
standard

Design Color:
green-herringbone

Design Color Name:
Green Herringbone

Logo Option:
none

Envelopes:
No

Envelope Quantity:

Envelope Price:
0

Deposit Forms:
No

Deposit Form Quantity:

Deposit Form Duplicates:
No

Deposit Form Price:
0

Tax Forms:
No

Tax Form Name:

Tax Form Quantity:

Base Price:
389

Premium Color Upcharge:
0

Total Price:
389

Order Number:
CHK-1756502426958

Order Date:
2025-08-29T21:20:26.958Z

Other Notes:
test`;

  const newTextFormat = createTextOrderSummary(sampleOrderData);
  const newHTMLFormat = createProfessionalOrderTable(sampleOrderData);
  const orderHash = generateOrderHash(sampleOrderData);
  const validation = validateOrderData(sampleOrderData);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Check Order Format Comparison</h1>
          <p className="text-lg text-muted-foreground mb-6">
            See the difference between the old raw text format and the new professional formatted output
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="outline" className="text-red-600 border-red-300">
              <FileText className="w-4 h-4 mr-2" />
              Old Raw Format
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-300">
              <Shield className="w-4 h-4 mr-2" />
              New Professional Format
            </Badge>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSensitiveData(!showSensitiveData)}
            >
              {showSensitiveData ? (
                <>
                  <EyeOff className="w-4 h-4 mr-2" />
                  Hide Sensitive Data
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Show Sensitive Data
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="comparison" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="comparison">Format Comparison</TabsTrigger>
            <TabsTrigger value="security">Security Features</TabsTrigger>
            <TabsTrigger value="demo">Live Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="comparison" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Old Format */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Old Raw Text Format
                  </CardTitle>
                  <CardDescription>
                    Difficult to read and process, no security measures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                      {oldFormat}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* New Format */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    New Professional Format
                  </CardTitle>
                  <CardDescription>
                    Clean, organized, and secure with data masking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                      {newTextFormat}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Security Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Data Masking</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Order Validation</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {validation.isValid ? 'Passed' : 'Failed'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Order Hash</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {orderHash}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Fraud Detection</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Masking Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Routing Number</span>
                      <span className="font-mono text-sm">
                        {showSensitiveData ? '123456789' : '123****'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Account Number</span>
                      <span className="font-mono text-sm">
                        {showSensitiveData ? '987654321' : '****4321'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Phone Number</span>
                                              <span className="font-mono text-sm">
                          {showSensitiveData ? '(903) 815-9488' : '(903) ***-9488'}
                        </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>HTML Email Format Preview</CardTitle>
                <CardDescription>
                  This is how the order would appear in professional email notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <iframe
                    srcDoc={newHTMLFormat}
                    className="w-full h-96 border-0"
                    title="Order Format Preview"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Key Improvements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Formatting</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Professional table layout</li>
                <li>• Clear section organization</li>
                <li>• Easy-to-read formatting</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Security</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Sensitive data masking</li>
                <li>• Order validation</li>
                <li>• Fraud detection</li>
                <li>• Secure order hashing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFormatDemo; 