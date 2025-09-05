// Bookkeeping data utilities for managing check order data
import { OrderData } from './orderFormatter';

export interface BookkeepingOrder extends OrderData {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
}

// Mock data storage - in real implementation, this would connect to your backend
let mockOrders: BookkeepingOrder[] = [
  {
    id: 'CHK-001',
    orderDate: '2024-12-15T10:30:00Z',
    orderNumber: 'CHK-001',
    status: 'completed',
    createdAt: '2024-12-15T10:30:00Z',
    updatedAt: '2024-12-15T14:30:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'high',
    tags: ['rush', 'month-end'],
    company: {
      name: 'TechStart Inc.',
      address: '123 Innovation Drive',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      phone: '(512) 555-0123'
    },
    bank: {
      name: 'First National Bank',
      city: 'Austin',
      routingNumber: '111000025',
      accountNumber: '1234567890',
      startingCheckNumber: '1001'
    },
    product: {
      checkType: 'DLT103',
      checkTypeName: 'Laser Top Checks',
      quantity: '1000',
      duplicates: true,
      packingOrder: 'standard',
      designColor: 'blue-herringbone',
      logoOption: 'standard'
    },
    additionalItems: {
      envelopes: { quantity: '1000', price: 165 },
      depositForms: null,
      taxForms: null
    },
    pricing: {
      basePrice: 214,
      premiumColorUpcharge: 0,
      envelopePrice: 165,
      depositFormPrice: 0,
      totalPrice: 379
    },
    notes: 'Rush order needed for month-end'
  },
  {
    id: 'CHK-002',
    orderDate: '2024-12-14T14:20:00Z',
    orderNumber: 'CHK-002',
    status: 'processing',
    createdAt: '2024-12-14T14:20:00Z',
    updatedAt: '2024-12-14T16:45:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'medium',
    tags: ['custom-logo', 'premium'],
    company: {
      name: 'Green Solutions LLC',
      address: '456 Eco Street',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
      phone: '(503) 555-0456'
    },
    bank: {
      name: 'Pacific Northwest Bank',
      city: 'Portland',
      routingNumber: '123000456',
      accountNumber: '9876543210',
      startingCheckNumber: '2001'
    },
    product: {
      checkType: 'DLM260',
      checkTypeName: 'Laser Middle Checks',
      quantity: '2000',
      duplicates: false,
      packingOrder: 'reverse',
      designColor: 'green-herringbone',
      logoOption: 'premium'
    },
    additionalItems: {
      envelopes: { quantity: '2000', price: 292 },
      depositForms: { quantity: '300', price: 81 },
      taxForms: null
    },
    pricing: {
      basePrice: 355,
      premiumColorUpcharge: 15,
      envelopePrice: 292,
      depositFormPrice: 81,
      totalPrice: 743
    },
    notes: 'Custom logo placement requested'
  },
  {
    id: 'CHK-003',
    orderDate: '2024-12-13T09:15:00Z',
    orderNumber: 'CHK-003',
    status: 'pending',
    createdAt: '2024-12-13T09:15:00Z',
    updatedAt: '2024-12-13T09:15:00Z',
    assignedTo: undefined,
    priority: 'low',
    tags: ['tax-forms', 'year-end'],
    company: {
      name: 'Innovate Labs',
      address: '789 Tech Boulevard',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      phone: '(415) 555-0789'
    },
    bank: {
      name: 'Silicon Valley Bank',
      city: 'San Francisco',
      routingNumber: '121000248',
      accountNumber: '5555666677',
      startingCheckNumber: '3001'
    },
    product: {
      checkType: 'DLB135',
      checkTypeName: 'Laser Bottom Checks',
      quantity: '500',
      duplicates: true,
      packingOrder: 'standard',
      designColor: 'american-spirit',
      logoOption: 'standard'
    },
    additionalItems: {
      envelopes: null,
      depositForms: null,
      taxForms: { formName: 'W-2', quantity: '50' }
    },
    pricing: {
      basePrice: 156,
      premiumColorUpcharge: 15,
      envelopePrice: 0,
      depositFormPrice: 0,
      totalPrice: 171
    },
    notes: 'Include tax forms for year-end'
  }
];

// Functions to manage bookkeeping data
export const getBookkeepingOrders = (): BookkeepingOrder[] => {
  return mockOrders;
};

export const getBookkeepingOrderById = (id: string): BookkeepingOrder | undefined => {
  return mockOrders.find(order => order.id === id);
};

export const updateOrderStatus = (id: string, status: BookkeepingOrder['status']): boolean => {
  const orderIndex = mockOrders.findIndex(order => order.id === id);
  if (orderIndex !== -1) {
    mockOrders[orderIndex].status = status;
    mockOrders[orderIndex].updatedAt = new Date().toISOString();
    return true;
  }
  return false;
};

export const assignOrder = (id: string, assignedTo: string): boolean => {
  const orderIndex = mockOrders.findIndex(order => order.id === id);
  if (orderIndex !== -1) {
    mockOrders[orderIndex].assignedTo = assignedTo;
    mockOrders[orderIndex].updatedAt = new Date().toISOString();
    return true;
  }
  return false;
};

export const addOrderTag = (id: string, tag: string): boolean => {
  const orderIndex = mockOrders.findIndex(order => order.id === id);
  if (orderIndex !== -1) {
    if (!mockOrders[orderIndex].tags.includes(tag)) {
      mockOrders[orderIndex].tags.push(tag);
      mockOrders[orderIndex].updatedAt = new Date().toISOString();
    }
    return true;
  }
  return false;
};

export const removeOrderTag = (id: string, tag: string): boolean => {
  const orderIndex = mockOrders.findIndex(order => order.id === id);
  if (orderIndex !== -1) {
    mockOrders[orderIndex].tags = mockOrders[orderIndex].tags.filter(t => t !== tag);
    mockOrders[orderIndex].updatedAt = new Date().toISOString();
    return true;
  }
  return false;
};

// Convert OrderData from check ordering form to BookkeepingOrder
export const convertToBookkeepingOrder = (orderData: OrderData): BookkeepingOrder => {
  return {
    ...orderData,
    id: orderData.orderNumber,
    status: 'pending',
    createdAt: orderData.orderDate,
    updatedAt: orderData.orderDate,
    assignedTo: undefined,
    priority: 'medium',
    tags: []
  };
};

// Add new order from check ordering form
export const addNewOrder = (orderData: OrderData): BookkeepingOrder => {
  const bookkeepingOrder = convertToBookkeepingOrder(orderData);
  mockOrders.unshift(bookkeepingOrder); // Add to beginning of array
  return bookkeepingOrder;
};

// Statistics functions
export const getOrderStatistics = () => {
  const totalOrders = mockOrders.length;
  const completedOrders = mockOrders.filter(order => order.status === 'completed').length;
  const pendingOrders = mockOrders.filter(order => order.status === 'pending').length;
  const processingOrders = mockOrders.filter(order => order.status === 'processing').length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.pricing.totalPrice, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  return {
    totalOrders,
    completedOrders,
    pendingOrders,
    processingOrders,
    totalRevenue,
    averageOrderValue,
    completionRate: totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0
  };
};

// Filter functions
export const filterOrdersByStatus = (status: string) => {
  if (status === 'all') return mockOrders;
  return mockOrders.filter(order => order.status === status);
};

export const filterOrdersBySearch = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return mockOrders.filter(order => 
    order.company.name.toLowerCase().includes(lowercaseQuery) ||
    order.id.toLowerCase().includes(lowercaseQuery) ||
    order.company.city.toLowerCase().includes(lowercaseQuery) ||
    order.company.state.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterOrdersByDateRange = (startDate: string, endDate: string) => {
  return mockOrders.filter(order => {
    const orderDate = new Date(order.orderDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return orderDate >= start && orderDate <= end;
  });
};
