// Order management utilities for integrating check orders with bookkeeping
import { OrderData } from './orderFormatter';
import { BookkeepingOrder } from './bookkeepingData';

export interface OrderStatus {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled' | 'paid' | 'shipped';
  timestamp: string;
  notes?: string;
}

export interface OrderPayment {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'paid' | 'failed' | 'refunded';
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
  timestamp: string;
}

// Store orders in localStorage for demo purposes (in production, use a database)
const ORDERS_KEY = 'clearledger_orders';
const ORDER_STATUSES_KEY = 'clearledger_order_statuses';
const ORDER_PAYMENTS_KEY = 'clearledger_order_payments';

export const saveOrder = (orderData: OrderData): BookkeepingOrder => {
  const bookkeepingOrder: BookkeepingOrder = {
    ...orderData,
    id: orderData.orderNumber,
    status: 'pending',
    createdAt: orderData.orderDate,
    updatedAt: orderData.orderDate,
    assignedTo: undefined,
    priority: 'medium',
    tags: ['check-order', 'new']
  };

  // Get existing orders
  const existingOrders = getOrders();
  
  // Add new order
  const updatedOrders = [bookkeepingOrder, ...existingOrders];
  
  // Save to localStorage
  localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
  
  // Create initial status
  const status: OrderStatus = {
    id: orderData.orderNumber,
    status: 'pending',
    timestamp: new Date().toISOString(),
    notes: 'Order received and awaiting payment'
  };
  
  const existingStatuses = getOrderStatuses();
  const updatedStatuses = [status, ...existingStatuses];
  localStorage.setItem(ORDER_STATUSES_KEY, JSON.stringify(updatedStatuses));
  
  return bookkeepingOrder;
};

export const getOrders = (): BookkeepingOrder[] => {
  try {
    const orders = localStorage.getItem(ORDERS_KEY);
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error loading orders:', error);
    return [];
  }
};

export const getOrderById = (id: string): BookkeepingOrder | undefined => {
  const orders = getOrders();
  return orders.find(order => order.id === id);
};

export const updateOrderStatus = (id: string, status: BookkeepingOrder['status'], notes?: string): boolean => {
  try {
    const orders = getOrders();
    const orderIndex = orders.findIndex(order => order.id === id);
    
    if (orderIndex === -1) return false;
    
    // Update order
    orders[orderIndex].status = status;
    orders[orderIndex].updatedAt = new Date().toISOString();
    
    // Save updated orders
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    
    // Add status update
    const statusUpdate: OrderStatus = {
      id,
      status,
      timestamp: new Date().toISOString(),
      notes
    };
    
    const existingStatuses = getOrderStatuses();
    const updatedStatuses = [statusUpdate, ...existingStatuses];
    localStorage.setItem(ORDER_STATUSES_KEY, JSON.stringify(updatedStatuses));
    
    return true;
  } catch (error) {
    console.error('Error updating order status:', error);
    return false;
  }
};

export const getOrderStatuses = (): OrderStatus[] => {
  try {
    const statuses = localStorage.getItem(ORDER_STATUSES_KEY);
    return statuses ? JSON.parse(statuses) : [];
  } catch (error) {
    console.error('Error loading order statuses:', error);
    return [];
  }
};

export const getOrderStatusHistory = (orderId: string): OrderStatus[] => {
  const statuses = getOrderStatuses();
  return statuses.filter(status => status.id === orderId);
};

export const savePayment = (payment: OrderPayment): boolean => {
  try {
    const existingPayments = getPayments();
    const updatedPayments = [payment, ...existingPayments];
    localStorage.setItem(ORDER_PAYMENTS_KEY, JSON.stringify(updatedPayments));
    return true;
  } catch (error) {
    console.error('Error saving payment:', error);
    return false;
  }
};

export const getPayments = (): OrderPayment[] => {
  try {
    const payments = localStorage.getItem(ORDER_PAYMENTS_KEY);
    return payments ? JSON.parse(payments) : [];
  } catch (error) {
    console.error('Error loading payments:', error);
    return [];
  }
};

export const getPaymentByOrderId = (orderId: string): OrderPayment | undefined => {
  const payments = getPayments();
  return payments.find(payment => payment.orderId === orderId);
};

export const getOrderStatistics = () => {
  const orders = getOrders();
  const payments = getPayments();
  
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  const processingOrders = orders.filter(order => order.status === 'processing').length;
  const completedOrders = orders.filter(order => order.status === 'completed').length;
  const paidOrders = orders.filter(order => order.status === 'paid').length;
  
  const totalRevenue = orders.reduce((sum, order) => sum + order.pricing.totalPrice, 0);
  const paidRevenue = payments
    .filter(payment => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const completionRate = totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0;
  const paymentRate = totalOrders > 0 ? (paidOrders / totalOrders) * 100 : 0;
  
  return {
    totalOrders,
    pendingOrders,
    processingOrders,
    completedOrders,
    paidOrders,
    totalRevenue,
    paidRevenue,
    averageOrderValue,
    completionRate,
    paymentRate
  };
};

export const filterOrdersByStatus = (status: string): BookkeepingOrder[] => {
  const orders = getOrders();
  if (status === 'all') return orders;
  return orders.filter(order => order.status === status);
};

export const searchOrders = (query: string): BookkeepingOrder[] => {
  const orders = getOrders();
  const lowercaseQuery = query.toLowerCase();
  
  return orders.filter(order => 
    order.company.name.toLowerCase().includes(lowercaseQuery) ||
    order.id.toLowerCase().includes(lowercaseQuery) ||
    order.company.city.toLowerCase().includes(lowercaseQuery) ||
    order.company.state.toLowerCase().includes(lowercaseQuery) ||
    order.product.checkTypeName.toLowerCase().includes(lowercaseQuery)
  );
};
