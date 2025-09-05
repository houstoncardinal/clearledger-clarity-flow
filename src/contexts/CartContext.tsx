import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Cart, CartItem, Product, calculateItemPrice, calculateCartTotal } from '@/utils/productCatalog';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity: number, customizations: Record<string, string>, addOns: string[]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateCustomizations: (itemId: string, customizations: Record<string, string>) => void;
  updateAddOns: (itemId: string, addOns: string[]) => void;
  clearCart: () => void;
  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'UPDATE_CUSTOMIZATIONS'; payload: { itemId: string; customizations: Record<string, string> } }
  | { type: 'UPDATE_ADDONS'; payload: { itemId: string; addOns: string[] } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; payload: { code: string; amount: number; type: 'percentage' | 'fixed' } }
  | { type: 'REMOVE_DISCOUNT' };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => 
        item.product.id === newItem.product.id &&
        JSON.stringify(item.selectedCustomizations) === JSON.stringify(newItem.selectedCustomizations) &&
        JSON.stringify(item.selectedAddOns) === JSON.stringify(newItem.selectedAddOns)
      );

      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, newItem];
      }

      const updatedCart = { ...state, items: updatedItems };
      return calculateCartTotal(updatedCart);
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.itemId !== action.payload);
      const updatedCart = { ...state, items: updatedItems };
      return calculateCartTotal(updatedCart);
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.itemId === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      const updatedCart = { ...state, items: updatedItems };
      return calculateCartTotal(updatedCart);
    }

    case 'UPDATE_CUSTOMIZATIONS': {
      const updatedItems = state.items.map(item =>
        item.itemId === action.payload.itemId
          ? { ...item, selectedCustomizations: action.payload.customizations }
          : item
      );
      
      // Recalculate prices for updated items
      const recalculatedItems = updatedItems.map(item => ({
        ...item,
        calculatedPrice: calculateItemPrice(item)
      }));
      
      const updatedCart = { ...state, items: recalculatedItems };
      return calculateCartTotal(updatedCart);
    }

    case 'UPDATE_ADDONS': {
      const updatedItems = state.items.map(item =>
        item.itemId === action.payload.itemId
          ? { ...item, selectedAddOns: action.payload.addOns }
          : item
      );
      
      // Recalculate prices for updated items
      const recalculatedItems = updatedItems.map(item => ({
        ...item,
        calculatedPrice: calculateItemPrice(item)
      }));
      
      const updatedCart = { ...state, items: recalculatedItems };
      return calculateCartTotal(updatedCart);
    }

    case 'CLEAR_CART':
      return {
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0
      };

    case 'APPLY_DISCOUNT':
      return calculateCartTotal({
        ...state,
        discount: action.payload
      });

    case 'REMOVE_DISCOUNT':
      return calculateCartTotal({
        ...state,
        discount: undefined
      });

    default:
      return state;
  }
};

const initialCart: Cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (product: Product, quantity: number, customizations: Record<string, string>, addOns: string[]) => {
    const itemId = `${product.id}-${Date.now()}`;
    const cartItem: CartItem = {
      product,
      quantity,
      selectedCustomizations: customizations,
      selectedAddOns: addOns,
      calculatedPrice: 0,
      itemId
    };
    
    cartItem.calculatedPrice = calculateItemPrice(cartItem);
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };

  const updateCustomizations = (itemId: string, customizations: Record<string, string>) => {
    dispatch({ type: 'UPDATE_CUSTOMIZATIONS', payload: { itemId, customizations } });
  };

  const updateAddOns = (itemId: string, addOns: string[]) => {
    dispatch({ type: 'UPDATE_ADDONS', payload: { itemId, addOns } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const applyDiscount = (code: string): boolean => {
    // Mock discount codes - in production, validate against your backend
    const discountCodes: Record<string, { amount: number; type: 'percentage' | 'fixed' }> = {
      'WELCOME10': { amount: 10, type: 'percentage' },
      'SAVE50': { amount: 50, type: 'fixed' },
      'BULK20': { amount: 20, type: 'percentage' }
    };

    const discount = discountCodes[code.toUpperCase()];
    if (discount) {
      dispatch({ type: 'APPLY_DISCOUNT', payload: { code, ...discount } });
      return true;
    }
    return false;
  };

  const removeDiscount = () => {
    dispatch({ type: 'REMOVE_DISCOUNT' });
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateCustomizations,
      updateAddOns,
      clearCart,
      applyDiscount,
      removeDiscount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
