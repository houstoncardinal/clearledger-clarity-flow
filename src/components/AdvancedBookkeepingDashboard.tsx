import React, { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { 
  FileText, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Calculator,
  Eye, 
  Edit, 
  MoreHorizontal, 
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  RefreshCw,
  Plus,
  Search,
  Download,
  Upload,
  Building2,
  Package,
  Truck,
  CheckSquare,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Target,
  Zap,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Calendar,
  Globe,
  Star,
  Award,
  TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  getOrders,
  getOrderStatistics,
  updateOrderStatus,
  getOrderStatusHistory,
  getPayments,
  filterOrdersByStatus,
  searchOrders,
  type BookkeepingOrder
} from '@/utils/orderManagement';
import { 
  generateRevenueData,
  generateProductPerformance,
  generateCustomerAnalytics,
  generateSalesMetrics,
  calculateKPIs,
  generateForecast,
  calculateSeasonality,
  type RevenueData,
  type ProductPerformance,
  type CustomerAnalytics,
  type SalesMetrics
} from '@/utils/analytics';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  BarChart as RechartsBarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const AdvancedBookkeepingDashboard = () => {
  const { cart } = useCart();
  const [orders, setOrders] = useState<BookkeepingOrder[]>([]);
  const [stats, setStats] = useState<any>({});
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<BookkeepingOrder | null>(null);
  const [timeRange, setTimeRange] = useState('12m');
  
  // Analytics data
  const [revenueData, setRevenueData] = useState<RevenueData[]>([]);
  const [productPerformance, setProductPerformance] = useState<ProductPerformance[]>([]);
  const [customerAnalytics, setCustomerAnalytics] = useState<CustomerAnalytics | null>(null);
  const [salesMetrics, setSalesMetrics] = useState<SalesMetrics | null>(null);
  const [forecastData, setForecastData] = useState<RevenueData[]>([]);
  const [seasonalityData, setSeasonalityData] = useState<any[]>([]);

  useEffect(() => {
    loadData();
    loadAnalyticsData();
  }, [timeRange]);

  const loadData = () => {
    const orderData = getOrders();
    const orderStats = getOrderStatistics();
    setOrders(orderData);
    setStats(orderStats);
  };

  const loadAnalyticsData = () => {
    const months = timeRange === '3m' ? 3 : timeRange === '6m' ? 6 : timeRange === '12m' ? 12 : 24;
    
    const revenue = generateRevenueData(months);
    const products = generateProductPerformance();
    const customers = generateCustomerAnalytics();
    const sales = generateSalesMetrics();
    const forecast = generateForecast(revenue, 6);
    const seasonality = calculateSeasonality(revenue);
    
    setRevenueData(revenue);
    setProductPerformance(products);
    setCustomerAnalytics(customers);
    setSalesMetrics(sales);
    setForecastData(forecast);
    setSeasonalityData(seasonality);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'paid': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'paid': return CreditCard;
      case 'processing': return Clock;
      case 'pending': return AlertCircle;
      case 'cancelled': return XCircle;
      case 'shipped': return Truck;
      default: return FileText;
    }
  };

  const handleStatusUpdate = (orderId: string, newStatus: BookkeepingOrder['status']) => {
    const success = updateOrderStatus(orderId, newStatus, `Status updated to ${newStatus}`);
    if (success) {
      loadData(); // Reload data
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = searchQuery === '' || 
      order.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const kpis = calculateKPIs(revenueData);

  const dashboardStats = [
    {
      title: 'Total Revenue',
      value: `$${salesMetrics?.totalRevenue.toLocaleString() || '0'}`,
      change: `${kpis.revenueGrowth > 0 ? '+' : ''}${kpis.revenueGrowth.toFixed(1)}%`,
      trend: kpis.revenueGrowth > 0 ? 'up' : 'down',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders?.toString() || '0',
      change: `${kpis.orderGrowth > 0 ? '+' : ''}${kpis.orderGrowth.toFixed(1)}%`,
      trend: kpis.orderGrowth > 0 ? 'up' : 'down',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Avg Order Value',
      value: `$${kpis.overallAvgOrderValue}`,
      change: `${kpis.avgOrderValueGrowth > 0 ? '+' : ''}${kpis.avgOrderValueGrowth.toFixed(1)}%`,
      trend: kpis.avgOrderValueGrowth > 0 ? 'up' : 'down',
      icon: Calculator,
      color: 'text-purple-600'
    },
    {
      title: 'Conversion Rate',
      value: `${salesMetrics?.conversionRate || 0}%`,
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'text-orange-600'
    }
  ];

  const statusDistribution = [
    { name: 'Completed', value: stats.completedOrders || 0, color: '#10B981' },
    { name: 'Processing', value: stats.processingOrders || 0, color: '#F59E0B' },
    { name: 'Pending', value: stats.pendingOrders || 0, color: '#EF4444' },
    { name: 'Paid', value: stats.paidOrders || 0, color: '#3B82F6' }
  ];

  return (
    <div className="space-y-8">
      {/* Time Range Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Advanced Analytics Dashboard</h2>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 Months</SelectItem>
              <SelectItem value="6m">Last 6 Months</SelectItem>
              <SelectItem value="12m">Last 12 Months</SelectItem>
              <SelectItem value="24m">Last 24 Months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={loadAnalyticsData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">vs last period</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Advanced Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Revenue Trend with Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend & Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={[...revenueData, ...forecastData.map(d => ({ ...d, isForecast: true }))]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    fill="#3B82F6" 
                    fillOpacity={0.3}
                    stroke="#3B82F6"
                    strokeWidth={2}
                    name="Revenue"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    name="Orders"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Product Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productPerformance.slice(0, 5).map((product, index) => (
                    <div key={product.productId} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{product.productName}</p>
                          <p className="text-sm text-muted-foreground">{product.totalOrders} orders</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${product.totalRevenue.toLocaleString()}</p>
                        <p className={`text-sm ${product.growthRate > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {product.growthRate > 0 ? '+' : ''}{product.growthRate.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={statusDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-8">
          {/* Revenue Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#3B82F6" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonality Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={seasonalityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="monthName" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="averageRevenue" fill="#10B981" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">${salesMetrics?.monthlyRevenue.toLocaleString()}</h3>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{salesMetrics?.revenueGrowth.toFixed(1)}%</h3>
                  <p className="text-sm text-muted-foreground">Revenue Growth</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{salesMetrics?.conversionRate}%</h3>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">${salesMetrics?.averageOrderValue}</h3>
                  <p className="text-sm text-muted-foreground">Avg Order Value</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-8">
          {/* Product Performance Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productPerformance.map((product) => (
                  <div key={product.productId} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{product.productName}</h4>
                      <Badge variant={product.growthRate > 0 ? 'default' : 'destructive'}>
                        {product.growthRate > 0 ? '+' : ''}{product.growthRate.toFixed(1)}%
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">${product.totalRevenue.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Total Revenue</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{product.totalOrders}</p>
                        <p className="text-sm text-muted-foreground">Total Orders</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">${product.averageOrderValue}</p>
                        <p className="text-sm text-muted-foreground">Avg Order Value</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">{product.marketShare}%</p>
                        <p className="text-sm text-muted-foreground">Market Share</p>
                      </div>
                    </div>
                    
                    <Progress value={product.marketShare} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-8">
          {/* Customer Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              {customerAnalytics && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{customerAnalytics.totalCustomers}</h3>
                    <p className="text-sm text-muted-foreground">Total Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{customerAnalytics.newCustomers}</h3>
                    <p className="text-sm text-muted-foreground">New Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{customerAnalytics.retentionRate}%</h3>
                    <p className="text-sm text-muted-foreground">Retention Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">${customerAnalytics.customerLifetimeValue}</h3>
                    <p className="text-sm text-muted-foreground">Customer LTV</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          {/* Order Management */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Order Management</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Order
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" onClick={loadData}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <Card>
            <CardHeader>
              <CardTitle>All Orders ({filteredOrders.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredOrders.map((order) => {
                  const StatusIcon = getStatusIcon(order.status);
                  return (
                    <div key={order.id} className="flex items-center justify-between p-6 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{order.id}</h4>
                          <p className="text-sm text-muted-foreground">{order.company.name}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {order.product.checkTypeName}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {order.product.quantity} checks
                            </Badge>
                            {order.product.duplicates && (
                              <Badge variant="outline" className="text-xs">
                                With Duplicates
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-foreground">${order.pricing.totalPrice}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.orderDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {order.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-8">
          {/* Revenue Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Forecast (Next 6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={[...revenueData.slice(-6), ...forecastData]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    fill="#3B82F6" 
                    fillOpacity={0.3}
                    stroke="#3B82F6"
                    strokeWidth={2}
                    name="Historical Revenue"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    fill="#10B981" 
                    fillOpacity={0.3}
                    stroke="#10B981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Forecasted Revenue"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Forecast Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Forecast Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    ${forecastData.reduce((sum, data) => sum + data.revenue, 0).toLocaleString()}
                  </h3>
                  <p className="text-sm text-muted-foreground">Projected 6-Month Revenue</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {forecastData.reduce((sum, data) => sum + data.orders, 0)}
                  </h3>
                  <p className="text-sm text-muted-foreground">Projected Orders</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    ${Math.round(forecastData.reduce((sum, data) => sum + data.revenue, 0) / forecastData.reduce((sum, data) => sum + data.orders, 0))}
                  </h3>
                  <p className="text-sm text-muted-foreground">Projected Avg Order Value</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

  {/* Order Detail Modal */}
  {selectedOrder && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Order Details - {selectedOrder.id}</h2>
          <Button variant="outline" onClick={() => setSelectedOrder(null)}>
            <XCircle className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Company Name</Label>
                  <p className="text-foreground font-medium">{selectedOrder.company.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Address</Label>
                  <p className="text-foreground">{selectedOrder.company.address}</p>
                  <p className="text-foreground">{selectedOrder.company.city}, {selectedOrder.company.state} {selectedOrder.company.zip}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                  <p className="text-foreground">{selectedOrder.company.phone}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Bank Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Bank Name</Label>
                  <p className="text-foreground font-medium">{selectedOrder.bank.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Bank City</Label>
                  <p className="text-foreground">{selectedOrder.bank.city}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Routing Number</Label>
                  <p className="text-foreground font-mono">{selectedOrder.bank.routingNumber}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Account Number</Label>
                  <p className="text-foreground font-mono">{selectedOrder.bank.accountNumber}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Starting Check Number</Label>
                  <p className="text-foreground font-mono">{selectedOrder.bank.startingCheckNumber}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Product & Pricing Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Check Type</Label>
                  <p className="text-foreground font-medium">{selectedOrder.product.checkTypeName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Quantity</Label>
                  <p className="text-foreground">{selectedOrder.product.quantity} checks</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Duplicates</Label>
                  <p className="text-foreground">{selectedOrder.product.duplicates ? 'Yes' : 'No'}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Packing Order</Label>
                  <p className="text-foreground capitalize">{selectedOrder.product.packingOrder}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Design Color</Label>
                  <p className="text-foreground capitalize">{selectedOrder.product.designColor}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Logo Option</Label>
                  <p className="text-foreground capitalize">{selectedOrder.product.logoOption}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Pricing Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Price:</span>
                  <span className="text-foreground">${selectedOrder.pricing.basePrice}</span>
                </div>
                {selectedOrder.pricing.premiumColorUpcharge > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Premium Color:</span>
                    <span className="text-foreground">+${selectedOrder.pricing.premiumColorUpcharge}</span>
                  </div>
                )}
                {selectedOrder.additionalItems.envelopes && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envelopes ({selectedOrder.additionalItems.envelopes.quantity}):</span>
                    <span className="text-foreground">${selectedOrder.additionalItems.envelopes.price}</span>
                  </div>
                )}
                {selectedOrder.additionalItems.depositForms && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deposit Forms ({selectedOrder.additionalItems.depositForms.quantity}):</span>
                    <span className="text-foreground">${selectedOrder.additionalItems.depositForms.price}</span>
                  </div>
                )}
                {selectedOrder.additionalItems.taxForms && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax Forms ({selectedOrder.additionalItems.taxForms.formName}):</span>
                    <span className="text-foreground">Contact for pricing</span>
                  </div>
                )}
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total Price:</span>
                    <span className="text-primary">${selectedOrder.pricing.totalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Order Status & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {selectedOrder.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Priority:</span>
                  <Badge variant="outline" className={selectedOrder.priority === 'high' ? 'border-red-500 text-red-500' : selectedOrder.priority === 'medium' ? 'border-yellow-500 text-yellow-500' : 'border-green-500 text-green-500'}>
                    {selectedOrder.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Order Date:</span>
                  <span className="text-foreground">{new Date(selectedOrder.orderDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="text-foreground">{new Date(selectedOrder.updatedAt).toLocaleDateString()}</span>
                </div>
                {selectedOrder.assignedTo && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Assigned To:</span>
                    <span className="text-foreground">{selectedOrder.assignedTo}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tags:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedOrder.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {selectedOrder.notes && (
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Notes:</Label>
                    <p className="text-foreground mt-1 p-3 bg-accent/20 rounded-lg">{selectedOrder.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
          <Button variant="outline" onClick={() => setSelectedOrder(null)}>
            Close
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            Edit Order
          </Button>
          <Button>
            <CheckCircle className="w-4 h-4 mr-2" />
            Update Status
          </Button>
        </div>
      </div>
    </div>
  )}export default AdvancedBookkeepingDashboard;
