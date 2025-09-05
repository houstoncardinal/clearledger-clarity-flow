// Product catalog and pricing system for ClearLedger
export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'checks' | 'envelopes' | 'forms' | 'accessories';
  image?: string;
  features: string[];
  specifications: {
    size?: string;
    color?: string;
    material?: string;
    compatibility?: string[];
  };
  pricing: {
    basePrice: number;
    quantityPricing: Array<{
      quantity: number;
      onePart: number;
      twoPart: number;
      threePart?: number; // Optional for products that don't support 3-part
    }>;
    premiumOptions: Array<{
      name: string;
      price: number;
      description: string;
    }>;
  };
  addOns: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
    required?: boolean;
  }>;
  customizations: Array<{
    id: string;
    name: string;
    type: 'color' | 'logo' | 'text' | 'size' | 'partType';
    options: Array<{
      value: string;
      label: string;
      priceModifier: number;
    }>;
  }>;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCustomizations: Record<string, string>;
  selectedAddOns: string[];
  calculatedPrice: number;
  itemId: string; // Unique identifier for this cart item
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  discount?: {
    code: string;
    amount: number;
    type: 'percentage' | 'fixed';
  };
}

// Product Catalog with correct pricing tiers
export const products: Product[] = [
  {
    id: 'DLT103',
    name: 'Laser Top Checks',
    description: 'QuickBooks or Sage 100 Contractor Compatible - 8 ½ x 11", 1-Part Original',
    basePrice: 214,
    category: 'checks',
    features: [
      'Business checks with built-in security',
      'Preprinted lines for legibility',
      '2 tear-off vouchers',
      'Sheet format fits all standard printers',
      'Numbering options (consecutive or reverse)'
    ],
    specifications: {
      size: '8.5" x 11"',
      compatibility: ['QuickBooks', 'Sage 100 Contractor', 'Peachtree']
    },
    pricing: {
      basePrice: 214,
      quantityPricing: [
        { quantity: 250, onePart: 115, twoPart: 203, threePart: 234 },
        { quantity: 500, onePart: 156, twoPart: 277, threePart: 339 },
        { quantity: 1000, onePart: 214, twoPart: 389, threePart: 538 },
        { quantity: 2000, onePart: 355, twoPart: 626, threePart: 929 },
        { quantity: 2500, onePart: 439, twoPart: 781, threePart: 1154 },
        { quantity: 3000, onePart: 457, twoPart: 564, threePart: 1333 },
        { quantity: 4000, onePart: 596, twoPart: 1115, threePart: 1737 },
        { quantity: 5000, onePart: 703, twoPart: 1278, threePart: 2143 }
      ],
      premiumOptions: [
        { name: 'Premium Security Features', price: 25, description: 'Enhanced security features' },
        { name: 'Express Processing', price: 50, description: 'Rush order processing' }
      ]
    },
    addOns: [
      { id: 'rush', name: 'Rush Processing', price: 75, description: '3-day processing', required: false }
    ],
    customizations: [
      {
        id: 'partType',
        name: 'Part Type',
        type: 'partType',
        options: [
          { value: 'onePart', label: '1 Part', priceModifier: 0 },
          { value: 'twoPart', label: '2 Part', priceModifier: 0 },
          { value: 'threePart', label: '3 Part', priceModifier: 0 }
        ]
      },
      {
        id: 'color',
        name: 'Design Color',
        type: 'color',
        options: [
          { value: 'blue-herringbone', label: 'Blue Herringbone', priceModifier: 0 },
          { value: 'green-herringbone', label: 'Green Herringbone', priceModifier: 15 },
          { value: 'american-spirit', label: 'American Spirit', priceModifier: 15 },
          { value: 'maroon', label: 'Maroon', priceModifier: 15 }
        ]
      },
      {
        id: 'logo',
        name: 'Logo Option',
        type: 'logo',
        options: [
          { value: 'standard', label: 'Standard Logo', priceModifier: 0 },
          { value: 'premium', label: 'Premium Logo Placement', priceModifier: 25 },
          { value: 'custom', label: 'Custom Logo Design', priceModifier: 50 }
        ]
      }
    ]
  },
  {
    id: 'DLM260',
    name: 'Laser Middle Checks',
    description: 'QuickBooks Compatible - 8 ½ x 11", 3-Part Original + 2 Copies',
    basePrice: 355,
    category: 'checks',
    features: [
      '3-part check system',
      'Original + 2 copies',
      'Built-in security features',
      'Compatible with all major accounting software',
      'Professional appearance'
    ],
    specifications: {
      size: '8.5" x 11"',
      compatibility: ['QuickBooks', 'Sage', 'Peachtree', 'Xero']
    },
    pricing: {
      basePrice: 355,
      quantityPricing: [
        { quantity: 250, onePart: 115, twoPart: 203, threePart: 234 },
        { quantity: 500, onePart: 156, twoPart: 277, threePart: 339 },
        { quantity: 1000, onePart: 214, twoPart: 389, threePart: 538 },
        { quantity: 2000, onePart: 355, twoPart: 626, threePart: 929 },
        { quantity: 2500, onePart: 439, twoPart: 781, threePart: 1154 },
        { quantity: 3000, onePart: 457, twoPart: 564, threePart: 1333 },
        { quantity: 4000, onePart: 596, twoPart: 1115, threePart: 1737 },
        { quantity: 5000, onePart: 703, twoPart: 1278, threePart: 2143 }
      ],
      premiumOptions: [
        { name: 'Enhanced Security', price: 35, description: 'Advanced security features' },
        { name: 'Express Processing', price: 60, description: 'Rush order processing' }
      ]
    },
    addOns: [
      { id: 'rush', name: 'Rush Processing', price: 85, description: '3-day processing', required: false }
    ],
    customizations: [
      {
        id: 'partType',
        name: 'Part Type',
        type: 'partType',
        options: [
          { value: 'onePart', label: '1 Part', priceModifier: 0 },
          { value: 'twoPart', label: '2 Part', priceModifier: 0 },
          { value: 'threePart', label: '3 Part', priceModifier: 0 }
        ]
      },
      {
        id: 'color',
        name: 'Design Color',
        type: 'color',
        options: [
          { value: 'blue-herringbone', label: 'Blue Herringbone', priceModifier: 0 },
          { value: 'green-herringbone', label: 'Green Herringbone', priceModifier: 15 },
          { value: 'american-spirit', label: 'American Spirit', priceModifier: 15 }
        ]
      },
      {
        id: 'logo',
        name: 'Logo Option',
        type: 'logo',
        options: [
          { value: 'standard', label: 'Standard Logo', priceModifier: 0 },
          { value: 'premium', label: 'Premium Logo Placement', priceModifier: 30 },
          { value: 'custom', label: 'Custom Logo Design', priceModifier: 60 }
        ]
      }
    ]
  },
  {
    id: 'DLB135',
    name: 'Laser Bottom Checks',
    description: 'QuickBooks Compatible - 8 ½ x 11", 1-Part Original (No 3-Part Available)',
    basePrice: 156,
    category: 'checks',
    features: [
      'Single-part check system',
      'Cost-effective solution',
      'Built-in security features',
      'Compatible with QuickBooks',
      'Professional appearance',
      '*DLB135 does not come in 3 Part'
    ],
    specifications: {
      size: '8.5" x 11"',
      compatibility: ['QuickBooks', 'Sage', 'Peachtree']
    },
    pricing: {
      basePrice: 156,
      quantityPricing: [
        { quantity: 250, onePart: 115, twoPart: 203 }, // No threePart for DLB135
        { quantity: 500, onePart: 156, twoPart: 277 },
        { quantity: 1000, onePart: 214, twoPart: 389 },
        { quantity: 2000, onePart: 355, twoPart: 626 },
        { quantity: 2500, onePart: 439, twoPart: 781 },
        { quantity: 3000, onePart: 457, twoPart: 564 },
        { quantity: 4000, onePart: 596, twoPart: 1115 },
        { quantity: 5000, onePart: 703, twoPart: 1278 }
      ],
      premiumOptions: [
        { name: 'Enhanced Security', price: 20, description: 'Advanced security features' },
        { name: 'Express Processing', price: 45, description: 'Rush order processing' }
      ]
    },
    addOns: [
      { id: 'rush', name: 'Rush Processing', price: 55, description: '3-day processing', required: false }
    ],
    customizations: [
      {
        id: 'partType',
        name: 'Part Type',
        type: 'partType',
        options: [
          { value: 'onePart', label: '1 Part', priceModifier: 0 },
          { value: 'twoPart', label: '2 Part', priceModifier: 0 }
          // Note: No 3-part option for DLB135
        ]
      },
      {
        id: 'color',
        name: 'Design Color',
        type: 'color',
        options: [
          { value: 'blue-herringbone', label: 'Blue Herringbone', priceModifier: 0 },
          { value: 'green-herringbone', label: 'Green Herringbone', priceModifier: 15 },
          { value: 'american-spirit', label: 'American Spirit', priceModifier: 15 }
        ]
      },
      {
        id: 'logo',
        name: 'Logo Option',
        type: 'logo',
        options: [
          { value: 'standard', label: 'Standard Logo', priceModifier: 0 },
          { value: 'premium', label: 'Premium Logo Placement', priceModifier: 20 },
          { value: 'custom', label: 'Custom Logo Design', priceModifier: 40 }
        ]
      }
    ]
  },
  {
    id: 'ENV-DW',
    name: 'Double Window Envelopes',
    description: 'Security envelopes with double windows for check visibility',
    basePrice: 165,
    category: 'envelopes',
    features: [
      'Double window design',
      'Security features',
      'Professional appearance',
      'Compatible with all check sizes',
      'Bulk pricing available'
    ],
    specifications: {
      size: '9.5" x 4.125"',
      material: 'Security paper'
    },
    pricing: {
      basePrice: 165,
      quantityPricing: [
        { quantity: 250, onePart: 85 },
        { quantity: 500, onePart: 106 },
        { quantity: 1000, onePart: 165 },
        { quantity: 1500, onePart: 229 },
        { quantity: 2000, onePart: 292 }
      ],
      premiumOptions: [
        { name: 'Custom Printing', price: 30, description: 'Custom company printing' },
        { name: 'Express Processing', price: 25, description: 'Rush order processing' }
      ]
    },
    addOns: [
      { id: 'custom-print', name: 'Custom Printing', price: 30, description: 'Add company logo/text', required: false },
      { id: 'rush', name: 'Rush Processing', price: 25, description: '3-day processing', required: false }
    ],
    customizations: [
      {
        id: 'printing',
        name: 'Custom Printing',
        type: 'text',
        options: [
          { value: 'none', label: 'No Custom Printing', priceModifier: 0 },
          { value: 'logo', label: 'Logo Only', priceModifier: 30 },
          { value: 'full', label: 'Full Custom Design', priceModifier: 50 }
        ]
      }
    ]
  },
  {
    id: 'FORM-DEP',
    name: 'Deposit Forms',
    description: 'Professional deposit slips for bank transactions',
    basePrice: 81,
    category: 'forms',
    features: [
      'Professional appearance',
      'Bank-compatible format',
      'Multiple copies available',
      'Customizable fields',
      'Bulk pricing'
    ],
    specifications: {
      size: '8.5" x 11"',
      compatibility: ['All major banks']
    },
    pricing: {
      basePrice: 81,
      quantityPricing: [
        { quantity: 150, onePart: 52 },
        { quantity: 300, onePart: 81 },
        { quantity: 600, onePart: 130 },
        { quantity: 1200, onePart: 200 },
        { quantity: 2400, onePart: 308 }
      ],
      premiumOptions: [
        { name: 'Custom Fields', price: 20, description: 'Add custom fields' },
        { name: 'Express Processing', price: 15, description: 'Rush order processing' }
      ]
    },
    addOns: [
      { id: 'custom-fields', name: 'Custom Fields', price: 20, description: 'Add custom fields', required: false },
      { id: 'rush', name: 'Rush Processing', price: 15, description: '3-day processing', required: false }
    ],
    customizations: [
      {
        id: 'copies',
        name: 'Number of Copies',
        type: 'size',
        options: [
          { value: '2-part', label: '2-Part Form', priceModifier: 0 },
          { value: '3-part', label: '3-Part Form', priceModifier: 15 },
          { value: '4-part', label: '4-Part Form', priceModifier: 25 }
        ]
      }
    ]
  }
];

// Updated pricing calculation functions
export const calculateItemPrice = (item: CartItem): number => {
  const partType = item.selectedCustomizations.partType || 'onePart';
  const quantity = item.quantity;
  
  // Find the pricing tier for this quantity
  const pricingTier = item.product.pricing.quantityPricing.find(
    tier => tier.quantity === quantity
  );
  
  if (!pricingTier) {
    // Fallback to base price if quantity not found
    return item.product.basePrice * quantity;
  }
  
  let basePrice = 0;
  
  // Get the correct price based on part type
  switch (partType) {
    case 'onePart':
      basePrice = pricingTier.onePart;
      break;
    case 'twoPart':
      basePrice = pricingTier.twoPart;
      break;
    case 'threePart':
      if (pricingTier.threePart) {
        basePrice = pricingTier.threePart;
      } else {
        // If 3-part not available, fall back to 2-part
        basePrice = pricingTier.twoPart;
      }
      break;
    default:
      basePrice = pricingTier.onePart;
  }
  
  // Add customization costs (excluding partType as it's handled above)
  Object.entries(item.selectedCustomizations).forEach(([customizationId, value]) => {
    if (customizationId !== 'partType') {
      const customization = item.product.customizations.find(c => c.id === customizationId);
      if (customization) {
        const option = customization.options.find(o => o.value === value);
        if (option) {
          basePrice += option.priceModifier;
        }
      }
    }
  });
  
  // Add add-on costs
  item.selectedAddOns.forEach(addOnId => {
    const addOn = item.product.addOns.find(a => a.id === addOnId);
    if (addOn) {
      basePrice += addOn.price;
    }
  });
  
  return Math.round(basePrice);
};

export const calculateCartTotal = (cart: Cart): Cart => {
  const subtotal = cart.items.reduce((sum, item) => sum + item.calculatedPrice, 0);
  const tax = subtotal * 0.08; // 8% tax rate
  const shipping = subtotal > 500 ? 0 : 25; // Free shipping over $500
  
  let total = subtotal + tax + shipping;
  
  // Apply discount
  if (cart.discount) {
    if (cart.discount.type === 'percentage') {
      total = total * (1 - cart.discount.amount / 100);
    } else {
      total = total - cart.discount.amount;
    }
  }
  
  return {
    ...cart,
    subtotal,
    tax,
    shipping,
    total: Math.round(total)
  };
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

// Helper function to get available quantities for a product
export const getAvailableQuantities = (product: Product): number[] => {
  return product.pricing.quantityPricing.map(tier => tier.quantity);
};

// Helper function to get available part types for a product
export const getAvailablePartTypes = (product: Product): string[] => {
  const partTypeCustomization = product.customizations.find(c => c.id === 'partType');
  if (!partTypeCustomization) return ['onePart'];
  
  return partTypeCustomization.options.map(option => option.value);
};

// Helper function to get price for specific quantity and part type
export const getPriceForQuantityAndPartType = (product: Product, quantity: number, partType: string): number => {
  const pricingTier = product.pricing.quantityPricing.find(tier => tier.quantity === quantity);
  if (!pricingTier) return product.basePrice;
  
  switch (partType) {
    case 'onePart':
      return pricingTier.onePart;
    case 'twoPart':
      return pricingTier.twoPart;
    case 'threePart':
      return pricingTier.threePart || pricingTier.twoPart; // Fallback to 2-part if 3-part not available
    default:
      return pricingTier.onePart;
  }
};
