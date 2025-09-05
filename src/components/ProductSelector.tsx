import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { 
  products, 
  Product, 
  getAvailableQuantities, 
  getAvailablePartTypes, 
  getPriceForQuantityAndPartType 
} from '@/utils/productCatalog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { 
  Package, 
  Plus, 
  ShoppingCart,
  Info,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

interface ProductSelectorProps {
  onAddToCart: () => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ onAddToCart }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1000);
  const [customizations, setCustomizations] = useState<Record<string, string>>({});
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleProductSelect = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      // Reset customizations and add-ons when product changes
      setCustomizations({});
      setSelectedAddOns([]);
      // Set default quantity to first available option
      const availableQuantities = getAvailableQuantities(product);
      if (availableQuantities.length > 0) {
        setQuantity(availableQuantities[0]);
      }
    }
  };

  const handleCustomizationChange = (customizationId: string, value: string) => {
    setCustomizations(prev => ({
      ...prev,
      [customizationId]: value
    }));
  };

  const handleAddOnToggle = (addOnId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns(prev => [...prev, addOnId]);
    } else {
      setSelectedAddOns(prev => prev.filter(id => id !== addOnId));
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, quantity, customizations, selectedAddOns);
      onAddToCart();
      
      // Reset form
      setSelectedProduct(null);
      setQuantity(1000);
      setCustomizations({});
      setSelectedAddOns([]);
    }
  };

  const calculatePrice = () => {
    if (!selectedProduct) return 0;
    
    const partType = customizations.partType || 'onePart';
    let basePrice = getPriceForQuantityAndPartType(selectedProduct, quantity, partType);
    
    // Add customization costs (excluding partType as it's handled above)
    Object.entries(customizations).forEach(([customizationId, value]) => {
      if (customizationId !== 'partType') {
        const customization = selectedProduct.customizations.find(c => c.id === customizationId);
        if (customization) {
          const option = customization.options.find(o => o.value === value);
          if (option) {
            basePrice += option.priceModifier;
          }
        }
      }
    });
    
    // Add add-on costs
    selectedAddOns.forEach(addOnId => {
      const addOn = selectedProduct.addOns.find(a => a.id === addOnId);
      if (addOn) {
        basePrice += addOn.price;
      }
    });
    
    return Math.round(basePrice);
  };

  const getPartTypeLabel = (partType: string) => {
    switch (partType) {
      case 'onePart': return '1 Part';
      case 'twoPart': return '2 Part';
      case 'threePart': return '3 Part';
      default: return '1 Part';
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Select Product
          </CardTitle>
          <CardDescription>
            Choose your check type and customize your order
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="product-select">Product Type</Label>
            <Select onValueChange={handleProductSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Select a product type" />
              </SelectTrigger>
              <SelectContent>
                {products.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{product.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        From ${product.basePrice}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedProduct && (
            <>
              <div className="p-4 border rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">{selectedProduct.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{selectedProduct.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 mt-0.5 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableQuantities(selectedProduct).map((qty) => (
                      <SelectItem key={qty} value={qty.toString()}>
                        {qty.toLocaleString()} Checks
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum order: 250 checks
                </p>
              </div>

              {/* Part Type Selection */}
              <div>
                <Label className="text-sm font-medium">Part Type</Label>
                <RadioGroup
                  value={customizations.partType || 'onePart'}
                  onValueChange={(value) => handleCustomizationChange('partType', value)}
                  className="mt-2"
                >
                  {getAvailablePartTypes(selectedProduct).map((partType) => (
                    <div key={partType} className="flex items-center space-x-2">
                      <RadioGroupItem value={partType} id={`partType-${partType}`} />
                      <Label htmlFor={`partType-${partType}`} className="flex-1">
                        <div className="flex items-center justify-between">
                          <span>{getPartTypeLabel(partType)}</span>
                          <span className="text-sm font-medium text-green-600">
                            ${getPriceForQuantityAndPartType(selectedProduct, quantity, partType)}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                {/* Special note for DLB135 */}
                {selectedProduct.id === 'DLB135' && (
                  <div className="flex items-center gap-2 mt-2 p-2 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <p className="text-sm text-yellow-800">
                      *DLB135 does not come in 3 Part
                    </p>
                  </div>
                )}
              </div>

              {/* Pricing Table */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Pricing Table</Label>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border rounded-lg">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-2">Qty</th>
                        <th className="text-left p-2">1 Part</th>
                        <th className="text-left p-2">2 Part</th>
                        {selectedProduct.id !== 'DLB135' && (
                          <th className="text-left p-2">3 Part*</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProduct.pricing.quantityPricing.map((tier) => (
                        <tr key={tier.quantity} className="border-t">
                          <td className="p-2 font-medium">{tier.quantity.toLocaleString()}</td>
                          <td className="p-2">${tier.onePart}</td>
                          <td className="p-2">${tier.twoPart}</td>
                          {selectedProduct.id !== 'DLB135' && (
                            <td className="p-2">${tier.threePart}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground">
                  Tax & Shipping not included
                </p>
              </div>

              {/* Customizations */}
              {selectedProduct.customizations.filter(c => c.id !== 'partType').map((customization) => (
                <div key={customization.id}>
                  <Label className="text-sm font-medium">{customization.name}</Label>
                  <RadioGroup
                    value={customizations[customization.id] || ''}
                    onValueChange={(value) => handleCustomizationChange(customization.id, value)}
                    className="mt-2"
                  >
                    {customization.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`${customization.id}-${option.value}`} />
                        <Label htmlFor={`${customization.id}-${option.value}`} className="flex-1">
                          <div className="flex items-center justify-between">
                            <span>{option.label}</span>
                            {option.priceModifier > 0 && (
                              <span className="text-sm text-green-600">+${option.priceModifier}</span>
                            )}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}

              {/* Add-ons */}
              {selectedProduct.addOns.length > 0 && (
                <div>
                  <Label className="text-sm font-medium">Add-ons</Label>
                  <div className="space-y-2 mt-2">
                    {selectedProduct.addOns.map((addOn) => (
                      <div key={addOn.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`addon-${addOn.id}`}
                          checked={selectedAddOns.includes(addOn.id)}
                          onCheckedChange={(checked) => handleAddOnToggle(addOn.id, checked as boolean)}
                        />
                        <Label htmlFor={`addon-${addOn.id}`} className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium">{addOn.name}</span>
                              <p className="text-xs text-muted-foreground">{addOn.description}</p>
                            </div>
                            {addOn.price > 0 && (
                              <span className="text-sm text-green-600">+${addOn.price}</span>
                            )}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              {/* Price Summary */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Base Price ({getPartTypeLabel(customizations.partType || 'onePart')}):</span>
                  <span>${getPriceForQuantityAndPartType(selectedProduct, quantity, customizations.partType || 'onePart')}</span>
                </div>
                
                {Object.entries(customizations).map(([customizationId, value]) => {
                  if (customizationId !== 'partType') {
                    const customization = selectedProduct.customizations.find(c => c.id === customizationId);
                    const option = customization?.options.find(o => o.value === value);
                    if (option && option.priceModifier > 0) {
                      return (
                        <div key={customizationId} className="flex justify-between text-sm">
                          <span>{customization.name}:</span>
                          <span className="text-green-600">+${option.priceModifier}</span>
                        </div>
                      );
                    }
                  }
                  return null;
                })}
                
                {selectedAddOns.map((addOnId) => {
                  const addOn = selectedProduct.addOns.find(a => a.id === addOnId);
                  if (addOn && addOn.price > 0) {
                    return (
                      <div key={addOnId} className="flex justify-between text-sm">
                        <span>{addOn.name}:</span>
                        <span className="text-green-600">+${addOn.price}</span>
                      </div>
                    );
                  }
                  return null;
                })}
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>${calculatePrice()}</span>
                </div>
              </div>

              <Button onClick={handleAddToCart} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSelector;
