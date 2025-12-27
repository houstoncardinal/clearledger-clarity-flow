// Stripe integration utilities for order processing
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here');

export interface StripeOrderData {
  orderNumber: string;
  totalAmount: number;
  currency: string;
  customerEmail: string;
  customerName: string;
  companyName: string;
  orderItems: Array<{
    name: string;
    description: string;
    quantity: number;
    price: number;
  }>;
  metadata: Record<string, string>;
}

export const createStripeCheckoutSession = async (orderData: StripeOrderData) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe failed to initialize');
    }

    // Create checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const session = await response.json();

    if (session.error) {
      throw new Error(session.error);
    }

    // Redirect to Stripe Checkout using the session URL
    if (session.url) {
      window.location.href = session.url;
      return { success: true };
    } else {
      throw new Error('No checkout URL returned from session');
    }
  } catch (error) {
    console.error('Stripe checkout error:', error);
    throw error;
  }
};

export const formatOrderForStripe = (orderData: any): StripeOrderData => {
  const items = [];
  
  // Add main check order
  items.push({
    name: orderData.product.checkTypeName,
    description: `${orderData.product.quantity} checks${orderData.product.duplicates ? ' with duplicates' : ''}`,
    quantity: 1,
    price: orderData.pricing.basePrice * 100, // Convert to cents
  });

  // Add premium color upcharge if applicable
  if (orderData.pricing.premiumColorUpcharge > 0) {
    items.push({
      name: 'Premium Color Upcharge',
      description: 'Premium design color option',
      quantity: 1,
      price: orderData.pricing.premiumColorUpcharge * 100,
    });
  }

  // Add envelopes if selected
  if (orderData.additionalItems.envelopes) {
    items.push({
      name: 'Envelopes',
      description: `${orderData.additionalItems.envelopes.quantity} envelopes`,
      quantity: 1,
      price: orderData.additionalItems.envelopes.price * 100,
    });
  }

  // Add deposit forms if selected
  if (orderData.additionalItems.depositForms) {
    items.push({
      name: 'Deposit Forms',
      description: `${orderData.additionalItems.depositForms.quantity} deposit forms${orderData.additionalItems.depositForms.duplicates ? ' with duplicates' : ''}`,
      quantity: 1,
      price: orderData.additionalItems.depositForms.price * 100,
    });
  }

  return {
    orderNumber: orderData.orderNumber,
    totalAmount: orderData.pricing.totalPrice * 100, // Convert to cents
    currency: 'usd',
    customerEmail: orderData.company.phone, // You might want to add email field
    customerName: orderData.company.name,
    companyName: orderData.company.name,
    orderItems: items,
    metadata: {
      orderNumber: orderData.orderNumber,
      orderDate: orderData.orderDate,
      checkType: orderData.product.checkType,
      quantity: orderData.product.quantity,
      companyName: orderData.company.name,
      bankName: orderData.bank.name,
    },
  };
};
