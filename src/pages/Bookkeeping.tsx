import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  FileText, 
  Settings, 
  Bell, 
  Search,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  Filter,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  RefreshCw,
  CreditCard,
  Receipt,
  Building2,
  Banknote,
  Package,
  Shield,
  Hash,
  Calculator,
  FileCheck,
  FileEdit,
  FileSearch,
  FileLock,
  FileHeart,
  FileWarning,
  FileQuestion,
  Archive,
  Inbox,
  Send,
  Reply,
  Forward,
  Flag,
  Bookmark,
  Tag,
  Folder,
  FolderOpen,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileX,
  FileMinus,
  FilePlus,
  Activity,
  Target,
  Zap,
  Award,
  Globe,
  Star,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  PenTool,
  Image,
  Video,
  Link,
  AtSign,
  CheckSquare,
  Square,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Save,
  Share,
  Copy,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  AreaChart as RechartsAreaChart, 
  Area, 
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
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  FunnelChart,
  Funnel,
  Treemap,
  Cell as TreemapCell
} from 'recharts';

// Mock data for demonstration - in real implementation, this would come from your backend
const mockCheckOrders = [
  {
    id: 'CHK-001',
    orderDate: '2024-12-15T10:30:00Z',
    status: 'completed',
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
    status: 'processing',
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
    status: 'pending',
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

const Bookkeeping = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [checkOrders, setCheckOrders] = useState(mockCheckOrders);

  // Calculate statistics
  const totalOrders = checkOrders.length;
  const completedOrders = checkOrders.filter(order => order.status === 'completed').length;
  const pendingOrders = checkOrders.filter(order => order.status === 'pending').length;
  const processingOrders = checkOrders.filter(order => order.status === 'processing').length;
  const totalRevenue = checkOrders.reduce((sum, order) => sum + order.pricing.totalPrice, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 12500, orders: 8 },
    { month: 'Feb', revenue: 15200, orders: 12 },
    { month: 'Mar', revenue: 18900, orders: 15 },
    { month: 'Apr', revenue: 22100, orders: 18 },
    { month: 'May', revenue: 19800, orders: 16 },
    { month: 'Jun', revenue: 25600, orders: 20 },
    { month: 'Jul', revenue: 28900, orders: 22 },
    { month: 'Aug', revenue: 31200, orders: 25 },
    { month: 'Sep', revenue: 27800, orders: 21 },
    { month: 'Oct', revenue: 33400, orders: 28 },
    { month: 'Nov', revenue: 29800, orders: 24 },
    { month: 'Dec', revenue: 1293, orders: 3 }
  ];

  const checkTypeDistribution = [
    { name: 'Laser Top Checks', value: 45, color: '#3B82F6' },
    { name: 'Laser Middle Checks', value: 35, color: '#10B981' },
    { name: 'Laser Bottom Checks', value: 20, color: '#F59E0B' }
  ];

  const statusDistribution = [
    { name: 'Completed', value: completedOrders, color: '#10B981' },
    { name: 'Processing', value: processingOrders, color: '#F59E0B' },
    { name: 'Pending', value: pendingOrders, color: '#EF4444' }
  ];

  const stats = [
    {
      title: 'Total Orders',
      value: totalOrders.toString(),
      change: '+12.5%',
      trend: 'up',
      icon: FileText,
      color: 'text-blue-600',
      detail: 'vs last month'
    },
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      change: '+18.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      detail: 'vs last month'
    },
    {
      title: 'Avg Order Value',
      value: `$${averageOrderValue.toFixed(0)}`,
      change: '+5.2%',
      trend: 'up',
      icon: Calculator,
      color: 'text-purple-600',
      detail: 'vs last month'
    },
    {
      title: 'Completion Rate',
      value: `${totalOrders > 0 ? ((completedOrders / totalOrders) * 100).toFixed(1) : 0}%`,
      change: '+2.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-orange-600',
      detail: 'vs last month'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'processing': return Clock;
      case 'pending': return AlertCircle;
      default: return FileText;
    }
  };

  const filteredOrders = checkOrders.filter(order => {
    const matchesSearch = order.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading text-2xl font-bold text-foreground">
                  Bookkeeping Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Check Order Management & Financial Tracking
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search orders, companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-80"
                />
              </div>
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              'overview', 
              'orders', 
              'analytics', 
              'reports', 
              'clients', 
              'inventory',
              'settings'
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
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
                        <span className="text-sm text-muted-foreground ml-1">{stat.detail}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue & Orders Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="revenue" fill="#3B82F6" name="Revenue ($)" />
                      <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={3} name="Orders" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Check Type Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Check Type Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ResponsiveContainer width="100%" height={200}>
                      <RechartsPieChart>
                        <Pie
                          data={checkTypeDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {checkTypeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                    <div className="space-y-4">
                      {checkTypeDistribution.map((type, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: type.color }}
                            ></div>
                            <span className="text-sm font-medium">{type.name}</span>
                          </div>
                          <span className="text-sm font-bold">{type.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Check Orders</CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {checkOrders.slice(0, 5).map((order) => {
                    const StatusIcon = getStatusIcon(order.status);
                    return (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
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
                            <Button variant="outline" size="sm">
                              <Eye className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-3 h-3" />
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
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Check Orders Management</h2>
              <div className="flex space-x-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Check Orders ({filteredOrders.length})</CardTitle>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
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
                            <Button variant="outline" size="sm">
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
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Analytics & Insights</h2>
            
            {/* Advanced Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Status Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Status Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsBarChart data={statusDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#3B82F6" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Revenue Trend Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsAreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                    </RechartsAreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* KPI Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">18.3%</h3>
                    <p className="text-sm text-muted-foreground">Revenue Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{totalOrders}</h3>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">95.2%</h3>
                    <p className="text-sm text-muted-foreground">Order Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">2.3d</h3>
                    <p className="text-sm text-muted-foreground">Avg Processing Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Reports & Analytics</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Available Reports</CardTitle>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Reports list would go here - keeping existing structure */}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Client Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Client
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Client Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {checkOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{order.company.name}</h4>
                          <p className="text-sm text-muted-foreground">{order.company.city}, {order.company.state}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {order.company.phone}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-foreground">{order.id}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.orderDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Stock
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Check Stock Levels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Laser Top Checks</span>
                        <span className="text-sm font-bold">2,500</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Laser Middle Checks</span>
                        <span className="text-sm font-bold">1,800</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Laser Bottom Checks</span>
                        <span className="text-sm font-bold">950</span>
                      </div>
                      <Progress value={32} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Envelope Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Double Window</span>
                        <span className="text-sm font-bold">5,000</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Security Envelopes</span>
                        <span className="text-sm font-bold">2,200</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deposit Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">2-Part Forms</span>
                        <span className="text-sm font-bold">1,500</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">3-Part Forms</span>
                        <span className="text-sm font-bold">800</span>
                      </div>
                      <Progress value={27} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Default Check Type</label>
                    <Select defaultValue="DLT103">
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select default check type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DLT103">Laser Top Checks</SelectItem>
                        <SelectItem value="DLM260">Laser Middle Checks</SelectItem>
                        <SelectItem value="DLB135">Laser Bottom Checks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Default Quantity</label>
                    <Select defaultValue="1000">
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select default quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="250">250 Checks</SelectItem>
                        <SelectItem value="500">500 Checks</SelectItem>
                        <SelectItem value="1000">1,000 Checks</SelectItem>
                        <SelectItem value="2000">2,000 Checks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Auto-process orders</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Email notifications</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">New Order Alerts</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Low Stock Warnings</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Payment Reminders</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Weekly Reports</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Bookkeeping;
