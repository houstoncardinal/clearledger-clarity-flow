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
  },
  {
    id: 'CHK-004',
    orderDate: '2024-12-12T16:45:00Z',
    orderNumber: 'CHK-004',
    status: 'completed',
    createdAt: '2024-12-12T16:45:00Z',
    updatedAt: '2024-12-12T18:30:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'medium',
    tags: ['bulk-order', 'quarterly'],
    company: {
      name: 'Manufacturing Corp',
      address: '321 Industrial Way',
      city: 'Detroit',
      state: 'MI',
      zip: '48201',
      phone: '(313) 555-0123'
    },
    bank: {
      name: 'Chase Bank',
      city: 'Detroit',
      routingNumber: '072000326',
      accountNumber: '1111222233',
      startingCheckNumber: '5001'
    },
    product: {
      checkType: 'DLT103',
      checkTypeName: 'Laser Top Checks',
      quantity: '5000',
      duplicates: true,
      packingOrder: 'standard',
      designColor: 'gray',
      logoOption: 'standard'
    },
    additionalItems: {
      envelopes: { quantity: '5000', price: 703 },
      depositForms: { quantity: '1200', price: 200 },
      taxForms: null
    },
    pricing: {
      basePrice: 703,
      premiumColorUpcharge: 0,
      envelopePrice: 703,
      depositFormPrice: 200,
      totalPrice: 1406
    },
    notes: 'Large quarterly order for manufacturing operations'
  },
  {
    id: 'CHK-005',
    orderDate: '2024-12-11T11:20:00Z',
    orderNumber: 'CHK-005',
    status: 'processing',
    createdAt: '2024-12-11T11:20:00Z',
    updatedAt: '2024-12-11T15:10:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'high',
    tags: ['rush', 'new-client'],
    company: {
      name: 'Creative Agency LLC',
      address: '555 Design Street',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      phone: '(305) 555-0789'
    },
    bank: {
      name: 'Bank of America',
      city: 'Miami',
      routingNumber: '063100277',
      accountNumber: '4444555566',
      startingCheckNumber: '1001'
    },
    product: {
      checkType: 'DLM260',
      checkTypeName: 'Laser Middle Checks',
      quantity: '2500',
      duplicates: false,
      packingOrder: 'reverse',
      designColor: 'purple',
      logoOption: 'premium'
    },
    additionalItems: {
      envelopes: { quantity: '2500', price: 439 },
      depositForms: null,
      taxForms: null
    },
    pricing: {
      basePrice: 439,
      premiumColorUpcharge: 15,
      envelopePrice: 439,
      depositFormPrice: 0,
      totalPrice: 893
    },
    notes: 'New client - rush order needed for upcoming campaign'
  },
  {
    id: 'CHK-006',
    orderDate: '2024-12-10T13:30:00Z',
    orderNumber: 'CHK-006',
    status: 'pending',
    createdAt: '2024-12-10T13:30:00Z',
    updatedAt: '2024-12-10T13:30:00Z',
    assignedTo: undefined,
    priority: 'low',
    tags: ['small-business', 'startup'],
    company: {
      name: 'Local Bakery Co',
      address: '789 Sweet Street',
      city: 'Nashville',
      state: 'TN',
      zip: '37201',
      phone: '(615) 555-0456'
    },
    bank: {
      name: 'Regions Bank',
      city: 'Nashville',
      routingNumber: '061000052',
      accountNumber: '7777888899',
      startingCheckNumber: '2001'
    },
    product: {
      checkType: 'DLB135',
      checkTypeName: 'Laser Bottom Checks',
      quantity: '250',
      duplicates: false,
      packingOrder: 'standard',
      designColor: 'tan',
      logoOption: 'standard'
    },
    additionalItems: {
      envelopes: { quantity: '250', price: 85 },
      depositForms: null,
      taxForms: null
    },
    pricing: {
      basePrice: 115,
      premiumColorUpcharge: 0,
      envelopePrice: 85,
      depositFormPrice: 0,
      totalPrice: 200
    },
    notes: 'Small local bakery - first time ordering'
  },
  {
    id: 'CHK-007',
    orderDate: '2024-12-09T08:15:00Z',
    orderNumber: 'CHK-007',
    status: 'completed',
    createdAt: '2024-12-09T08:15:00Z',
    updatedAt: '2024-12-09T12:45:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'medium',
    tags: ['enterprise', 'quarterly'],
    company: {
      name: 'Global Logistics Inc',
      address: '999 Shipping Lane',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      phone: '(213) 555-0999'
    },
    bank: {
      name: 'Wells Fargo',
      city: 'Los Angeles',
      routingNumber: '121000248',
      accountNumber: '9999888877',
      startingCheckNumber: '10001'
    },
    product: {
      checkType: 'DLT103',
      checkTypeName: 'Laser Top Checks',
      quantity: '10000',
      duplicates: true,
      packingOrder: 'standard',
      designColor: 'blue',
      logoOption: 'premium'
    },
    additionalItems: {
      envelopes: { quantity: '10000', price: 1406 },
      depositForms: { quantity: '2400', price: 308 },
      taxForms: { formName: '1099', quantity: '100' }
    },
    pricing: {
      basePrice: 1406,
      premiumColorUpcharge: 15,
      envelopePrice: 1406,
      depositFormPrice: 308,
      totalPrice: 2735
    },
    notes: 'Enterprise client - quarterly bulk order with tax forms'
  },
  {
    id: 'CHK-008',
    orderDate: '2024-12-08T14:50:00Z',
    orderNumber: 'CHK-008',
    status: 'cancelled',
    createdAt: '2024-12-08T14:50:00Z',
    updatedAt: '2024-12-08T16:20:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'low',
    tags: ['cancelled', 'budget'],
    company: {
      name: 'Budget Startup LLC',
      address: '123 Frugal Street',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85001',
      phone: '(602) 555-0333'
    },
    bank: {
      name: 'Arizona Bank',
      city: 'Phoenix',
      routingNumber: '122101706',
      accountNumber: '3333444455',
      startingCheckNumber: '1001'
    },
    product: {
      checkType: 'DLM260',
      checkTypeName: 'Laser Middle Checks',
      quantity: '1000',
      duplicates: false,
      packingOrder: 'standard',
      designColor: 'gray',
      logoOption: 'standard'
    },
    additionalItems: {
      envelopes: null,
      depositForms: null,
      taxForms: null
    },
    pricing: {
      basePrice: 214,
      premiumColorUpcharge: 0,
      envelopePrice: 0,
      depositFormPrice: 0,
      totalPrice: 214
    },
    notes: 'Order cancelled due to budget constraints'
  },
  {
    id: 'CHK-009',
    orderDate: '2024-12-07T10:25:00Z',
    orderNumber: 'CHK-009',
    status: 'processing',
    createdAt: '2024-12-07T10:25:00Z',
    updatedAt: '2024-12-07T14:15:00Z',
    assignedTo: 'admin@yourclearledger.com',
    priority: 'high',
    tags: ['custom-design', 'premium'],
    company: {
      name: 'Luxury Hotel Group',
      address: '888 Resort Boulevard',
      city: 'Las Vegas',
      state: 'NV',
      zip: '89101',
      phone: '(702) 555-0888'
    },
    bank: {
      name: 'Nevada State Bank',
      city: 'Las Vegas',
      routingNumber: '122400724',
      accountNumber: '6666777788',
      startingCheckNumber: '5001'
    },
    product: {
      checkType: 'DLT103',
      checkTypeName: 'Laser Top Checks',
      quantity: '3000',
      duplicates: true,
      packingOrder: 'reverse',
      designColor: 'bluemarble',
      logoOption: 'premium'
    },
    additionalItems: {
      envelopes: { quantity: '3000', price: 457 },
      depositForms: { quantity: '600', price: 130 },
      taxForms: null
    },
    pricing: {
      basePrice: 457,
      premiumColorUpcharge: 15,
      envelopePrice: 457,
      depositFormPrice: 130,
      totalPrice: 1019
    },
    notes: 'Luxury hotel chain - premium design with custom logo placement'
  },
  {
    id: 'CHK-010',
    orderDate: '2024-12-06T15:40:00Z',
    orderNumber: 'CHK-010',
    status: 'pending',
    createdAt: '2024-12-06T15:40:00Z',
    updatedAt: '2024-12-06T15:40:00Z',
    assignedTo: undefined,
    priority: 'medium',
    tags: ['non-profit', 'charity'],
    company: {
      name: 'Community Foundation',
      address: '456 Help Street',
      city: 'Denver',
      state: 'CO',
      zip: '80201',
      phone: '(303) 555-0666'
    },
    bank: {
      name: 'FirstBank',
      city: 'Denver',
      routingNumber: '107000327',
      accountNumber: '5555666677',
      startingCheckNumber: '3001'
    },
    product: {
      checkType: 'DLB135',
      checkTypeName: 'Laser Bottom Checks',
      quantity: '1500',
      duplicates: false,
      packingOrder: 'standard',
      designColor: 'green',
      logoOption: 'standard'
    },
    additionalItems: {
      envelopes: { quantity: '1500', price: 229 },
      depositForms: { quantity: '300', price: 81 },
      taxForms: null
    },
    pricing: {
      basePrice: 277,
      premiumColorUpcharge: 0,
      envelopePrice: 229,
      depositFormPrice: 81,
      totalPrice: 587
    },
    notes: 'Non-profit organization - standard pricing applied'
  }  }
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
