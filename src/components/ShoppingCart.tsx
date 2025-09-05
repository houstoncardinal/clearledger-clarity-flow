import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart as CartIcon, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard, 
  Truck,
  Percent,
  X
} from 'lucide-react';

interface ShoppingCartProps {
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ onCheckout }) => {
  const { cart, updateQuantity, removeFromCart, applyDiscount, removeDiscount } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [showDiscountInput, setShowDiscountInput] = useState(false);

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      const success = applyDiscount(discountCode.trim());
      if (success) {
        setDiscountCode('');
        setShowDiscountInput(false);
      } else {
        alert('Invalid discount code');
      }
    }
  };

  const handleRemoveDiscount = () => {
    removeDiscount();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <CartIcon className="w-5 h-5" />
            Shopping Cart ({cart.items.length} items)
          </CardTitle>
          {cart.items.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => removeFromCart('all')}>
              Clear Cart
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {cart.items.length === 0 ? (
          <div className="text-center py-8">
            <CartIcon className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground">Add some products to get started!</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={item.itemId} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.product.description}</p>
                    
                    {/* Customizations */}
                    {Object.keys(item.selectedCustomizations).length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs font-medium text-muted-foreground">Customizations:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {Object.entries(item.selectedCustomizations).map(([key, value]) => (
                            <Badge key={key} variant="outline" className="text-xs">
                              {value}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Add-ons */}
                    {item.selectedAddOns.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs font-medium text-muted-foreground">Add-ons:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.selectedAddOns.map((addOnId) => {
                            const addOn = item.product.addOns.find(a => a.id === addOnId);
                            return addOn ? (
                              <Badge key={addOnId} variant="outline" className="text-xs">
                                {addOn.name}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  
                  <div className="text-right min-w-[100px]">
                    <p className="font-semibold">${item.calculatedPrice}</p>
                    <p className="text-xs text-muted-foreground">
                      ${Math.round(item.calculatedPrice / item.quantity)} each
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromCart(item.itemId)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <Separator />
            
            {/* Discount Code */}
            <div className="space-y-2">
              {cart.discount ? (
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">
                      Discount applied: {cart.discount.code}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRemoveDiscount}
                    className="text-green-600 hover:text-green-700"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {!showDiscountInput ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowDiscountInput(true)}
                    >
                      <Percent className="w-4 h-4 mr-2" />
                      Add Discount Code
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 flex-1">
                      <Input
                        placeholder="Enter discount code"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button size="sm" onClick={handleApplyDiscount}>
                        Apply
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setShowDiscountInput(false);
                          setDiscountCode('');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <Separator />
            
            {/* Order Summary */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cart.subtotal}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${cart.tax}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {cart.shipping === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    `$${cart.shipping}`
                  )}
                </span>
              </div>
              
              {cart.discount && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({cart.discount.code})</span>
                  <span>
                    -${cart.discount.type === 'percentage' 
                      ? Math.round(cart.subtotal * cart.discount.amount / 100)
                      : cart.discount.amount
                    }
                  </span>
                </div>
              )}
              
              <Separator />
              
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${cart.total}</span>
              </div>
            </div>
            
            {/* Checkout Button */}
            <div className="space-y-2">
              <Button 
                onClick={onCheckout} 
                className="w-full"
                size="lg"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Proceed to Checkout
              </Button>
              
              {cart.shipping > 0 && (
                <p className="text-xs text-center text-muted-foreground">
                  Add ${500 - cart.subtotal} more for free shipping!
                </p>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;
