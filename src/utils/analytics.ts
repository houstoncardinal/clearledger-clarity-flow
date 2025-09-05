// Advanced analytics and revenue tracking utilities
export interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
  newCustomers: number;
  returningCustomers: number;
}

export interface ProductPerformance {
  productId: string;
  productName: string;
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  growthRate: number;
  marketShare: number;
}

export interface CustomerAnalytics {
  totalCustomers: number;
  newCustomers: number;
  returningCustomers: number;
  averageOrderValue: number;
  customerLifetimeValue: number;
  retentionRate: number;
}

export interface SalesMetrics {
  totalRevenue: number;
  monthlyRevenue: number;
  quarterlyRevenue: number;
  yearlyRevenue: number;
  revenueGrowth: number;
  averageOrderValue: number;
  conversionRate: number;
  cartAbandonmentRate: number;
}

// Generate mock analytics data
export const generateRevenueData = (months: number = 12): RevenueData[] => {
  const data: RevenueData[] = [];
  const baseRevenue = 15000;
  const baseOrders = 12;
  
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    
    // Add some realistic variation
    const variation = (Math.random() - 0.5) * 0.3; // ±15% variation
    const seasonalFactor = 1 + Math.sin((date.getMonth() / 12) * Math.PI * 2) * 0.2; // Seasonal variation
    
    const revenue = Math.round(baseRevenue * (1 + variation) * seasonalFactor);
    const orders = Math.round(baseOrders * (1 + variation * 0.5) * seasonalFactor);
    const avgOrderValue = Math.round(revenue / orders);
    
    data.push({
      date: date.toISOString().split('T')[0],
      revenue,
      orders,
      averageOrderValue: avgOrderValue,
      newCustomers: Math.round(orders * 0.3),
      returningCustomers: Math.round(orders * 0.7)
    });
  }
  
  return data;
};

export const generateProductPerformance = (): ProductPerformance[] => {
  const products = [
    { id: 'DLT103', name: 'Laser Top Checks' },
    { id: 'DLM260', name: 'Laser Middle Checks' },
    { id: 'DLB135', name: 'Laser Bottom Checks' },
    { id: 'ENV-DW', name: 'Double Window Envelopes' },
    { id: 'FORM-DEP', name: 'Deposit Forms' }
  ];
  
  return products.map(product => {
    const totalRevenue = Math.round(Math.random() * 50000 + 10000);
    const totalOrders = Math.round(Math.random() * 200 + 50);
    const averageOrderValue = Math.round(totalRevenue / totalOrders);
    const growthRate = (Math.random() - 0.5) * 40; // ±20% growth
    const marketShare = Math.round(Math.random() * 30 + 10); // 10-40% market share
    
    return {
      productId: product.id,
      productName: product.name,
      totalRevenue,
      totalOrders,
      averageOrderValue,
      growthRate,
      marketShare
    };
  });
};

export const generateCustomerAnalytics = (): CustomerAnalytics => {
  const totalCustomers = Math.round(Math.random() * 1000 + 500);
  const newCustomers = Math.round(totalCustomers * 0.3);
  const returningCustomers = totalCustomers - newCustomers;
  const averageOrderValue = Math.round(Math.random() * 500 + 200);
  const customerLifetimeValue = Math.round(averageOrderValue * 3.5);
  const retentionRate = Math.round(Math.random() * 20 + 70); // 70-90% retention
  
  return {
    totalCustomers,
    newCustomers,
    returningCustomers,
    averageOrderValue,
    customerLifetimeValue,
    retentionRate
  };
};

export const generateSalesMetrics = (): SalesMetrics => {
  const totalRevenue = Math.round(Math.random() * 500000 + 200000);
  const monthlyRevenue = Math.round(totalRevenue / 12);
  const quarterlyRevenue = Math.round(totalRevenue / 4);
  const yearlyRevenue = totalRevenue;
  const revenueGrowth = (Math.random() - 0.5) * 30; // ±15% growth
  const averageOrderValue = Math.round(Math.random() * 300 + 200);
  const conversionRate = Math.round(Math.random() * 10 + 15); // 15-25% conversion
  const cartAbandonmentRate = Math.round(Math.random() * 20 + 60); // 60-80% abandonment
  
  return {
    totalRevenue,
    monthlyRevenue,
    quarterlyRevenue,
    yearlyRevenue,
    revenueGrowth,
    averageOrderValue,
    conversionRate,
    cartAbandonmentRate
  };
};

// Calculate key performance indicators
export const calculateKPIs = (revenueData: RevenueData[]) => {
  const currentMonth = revenueData[revenueData.length - 1];
  const previousMonth = revenueData[revenueData.length - 2];
  
  const revenueGrowth = previousMonth ? 
    ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100 : 0;
  
  const orderGrowth = previousMonth ? 
    ((currentMonth.orders - previousMonth.orders) / previousMonth.orders) * 100 : 0;
  
  const avgOrderValueGrowth = previousMonth ? 
    ((currentMonth.averageOrderValue - previousMonth.averageOrderValue) / previousMonth.averageOrderValue) * 100 : 0;
  
  const totalRevenue = revenueData.reduce((sum, data) => sum + data.revenue, 0);
  const totalOrders = revenueData.reduce((sum, data) => sum + data.orders, 0);
  const overallAvgOrderValue = totalRevenue / totalOrders;
  
  return {
    revenueGrowth: Math.round(revenueGrowth * 100) / 100,
    orderGrowth: Math.round(orderGrowth * 100) / 100,
    avgOrderValueGrowth: Math.round(avgOrderValueGrowth * 100) / 100,
    totalRevenue,
    totalOrders,
    overallAvgOrderValue: Math.round(overallAvgOrderValue)
  };
};

// Generate forecast data
export const generateForecast = (historicalData: RevenueData[], months: number = 6): RevenueData[] => {
  const forecast: RevenueData[] = [];
  const lastData = historicalData[historicalData.length - 1];
  
  // Simple linear trend calculation
  const recentData = historicalData.slice(-3);
  const avgGrowth = recentData.length > 1 ? 
    (recentData[recentData.length - 1].revenue - recentData[0].revenue) / recentData.length : 0;
  
  for (let i = 1; i <= months; i++) {
    const date = new Date(lastData.date);
    date.setMonth(date.getMonth() + i);
    
    const projectedRevenue = Math.round(lastData.revenue + (avgGrowth * i));
    const projectedOrders = Math.round(lastData.orders + (avgGrowth * i * 0.1));
    const projectedAvgOrderValue = Math.round(projectedRevenue / projectedOrders);
    
    forecast.push({
      date: date.toISOString().split('T')[0],
      revenue: projectedRevenue,
      orders: projectedOrders,
      averageOrderValue: projectedAvgOrderValue,
      newCustomers: Math.round(projectedOrders * 0.3),
      returningCustomers: Math.round(projectedOrders * 0.7)
    });
  }
  
  return forecast;
};

// Calculate seasonality
export const calculateSeasonality = (revenueData: RevenueData[]) => {
  const monthlyAverages = Array(12).fill(0).map(() => ({ sum: 0, count: 0 }));
  
  revenueData.forEach(data => {
    const month = new Date(data.date).getMonth();
    monthlyAverages[month].sum += data.revenue;
    monthlyAverages[month].count += 1;
  });
  
  return monthlyAverages.map((month, index) => ({
    month: index,
    monthName: new Date(2024, index).toLocaleString('default', { month: 'short' }),
    averageRevenue: Math.round(month.sum / month.count),
    seasonalityFactor: month.count > 0 ? month.sum / month.count : 0
  }));
};
