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
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Activity,
  Target,
  Zap,
  Shield,
  Award,
  Globe,
  CreditCard,
  Receipt,
  Star,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
  PenTool,
  Image,
  Video,
  Link,
  Hash,
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
  ExternalLink,
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
  FileCheck,
  FileMinus,
  FilePlus,
  FileSearch,
  FileEdit,
  FileLock,
  FileHeart,
  FileWarning,
  FileQuestion
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import ContentCreationModal from '@/components/ContentCreationModal';
import ClientManagement from '@/components/ClientManagement';
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

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [contentFilter, setContentFilter] = useState('all');
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);

  // Mock data for charts
  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
    { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
    { month: 'Mar', revenue: 48000, expenses: 33000, profit: 15000 },
    { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
    { month: 'May', revenue: 55000, expenses: 36000, profit: 19000 },
    { month: 'Jun', revenue: 67000, expenses: 42000, profit: 25000 },
    { month: 'Jul', revenue: 72000, expenses: 45000, profit: 27000 },
    { month: 'Aug', revenue: 68000, expenses: 43000, profit: 25000 },
    { month: 'Sep', revenue: 75000, expenses: 47000, profit: 28000 },
    { month: 'Oct', revenue: 82000, expenses: 50000, profit: 32000 },
    { month: 'Nov', revenue: 78000, expenses: 48000, profit: 30000 },
    { month: 'Dec', revenue: 89000, expenses: 55000, profit: 34000 }
  ];

  const clientGrowthData = [
    { month: 'Jan', newClients: 12, activeClients: 45, churnRate: 2.1 },
    { month: 'Feb', newClients: 15, activeClients: 58, churnRate: 1.8 },
    { month: 'Mar', newClients: 18, activeClients: 72, churnRate: 1.5 },
    { month: 'Apr', newClients: 22, activeClients: 89, churnRate: 1.2 },
    { month: 'May', newClients: 25, activeClients: 108, churnRate: 1.0 },
    { month: 'Jun', newClients: 28, activeClients: 128, churnRate: 0.9 },
    { month: 'Jul', newClients: 32, activeClients: 152, churnRate: 0.8 },
    { month: 'Aug', newClients: 35, activeClients: 178, churnRate: 0.7 },
    { month: 'Sep', newClients: 38, activeClients: 205, churnRate: 0.6 },
    { month: 'Oct', newClients: 42, activeClients: 235, churnRate: 0.5 },
    { month: 'Nov', newClients: 45, activeClients: 268, churnRate: 0.4 },
    { month: 'Dec', newClients: 48, activeClients: 302, churnRate: 0.3 }
  ];

  const serviceDistributionData = [
    { name: 'QuickBooks Services', value: 35, color: '#3B82F6' },
    { name: 'Bookkeeping', value: 25, color: '#10B981' },
    { name: 'Tax Preparation', value: 20, color: '#F59E0B' },
    { name: 'Payroll Processing', value: 15, color: '#EF4444' },
    { name: 'Financial Advisory', value: 5, color: '#8B5CF6' }
  ];

  const socialMediaMetrics = [
    { platform: 'LinkedIn', followers: 2847, engagement: 4.2, posts: 156, reach: 12500 },
    { platform: 'Instagram', followers: 1923, engagement: 6.8, posts: 203, reach: 8900 },
    { platform: 'Twitter', followers: 3456, engagement: 3.1, posts: 89, reach: 15600 },
    { platform: 'Facebook', followers: 1234, engagement: 2.8, posts: 67, reach: 5400 },
    { platform: 'YouTube', followers: 892, engagement: 8.5, posts: 34, reach: 3200 }
  ];

  const contentCalendar = [
    {
      id: 1,
      title: 'Tax Season Tips for Small Businesses',
      type: 'blog',
      platform: 'LinkedIn',
      scheduledDate: '2024-12-15',
      status: 'scheduled',
      content: 'Essential tax preparation tips for small business owners...',
      tags: ['tax', 'small-business', 'tips'],
      engagement: 0
    },
    {
      id: 2,
      title: 'QuickBooks vs Manual Bookkeeping',
      type: 'video',
      platform: 'YouTube',
      scheduledDate: '2024-12-16',
      status: 'draft',
      content: 'Comparison video showing the benefits of QuickBooks...',
      tags: ['quickbooks', 'bookkeeping', 'comparison'],
      engagement: 0
    },
    {
      id: 3,
      title: 'Financial Health Check Infographic',
      type: 'image',
      platform: 'Instagram',
      scheduledDate: '2024-12-17',
      status: 'published',
      content: 'Visual guide to checking your business financial health...',
      tags: ['infographic', 'financial-health', 'tips'],
      engagement: 234
    },
    {
      id: 4,
      title: 'Year-End Tax Planning Webinar',
      type: 'event',
      platform: 'LinkedIn',
      scheduledDate: '2024-12-20',
      status: 'scheduled',
      content: 'Join us for a comprehensive year-end tax planning session...',
      tags: ['webinar', 'tax-planning', 'year-end'],
      engagement: 0
    },
    {
      id: 5,
      title: 'Client Success Story: Tech Startup',
              type: 'blog-post',
      platform: 'Website',
      scheduledDate: '2024-12-18',
      status: 'draft',
      content: 'How we helped a tech startup streamline their finances...',
              tags: ['blog-post', 'success-story', 'tech'],
      engagement: 0
    }
  ];

  const invoices = [
    {
      id: 'INV-001',
      client: 'TechStart Inc.',
      amount: 12500,
      status: 'paid',
      dueDate: '2024-12-10',
      issueDate: '2024-11-25',
      services: ['Monthly Bookkeeping', 'Tax Preparation']
    },
    {
      id: 'INV-002',
      client: 'Green Solutions',
      amount: 8900,
      status: 'pending',
      dueDate: '2024-12-15',
      issueDate: '2024-11-30',
      services: ['Payroll Processing', 'Financial Advisory']
    },
    {
      id: 'INV-003',
      client: 'Innovate Labs',
      amount: 15300,
      status: 'overdue',
      dueDate: '2024-12-05',
      issueDate: '2024-11-20',
      services: ['Quarterly Review', 'Compliance Reporting']
    },
    {
      id: 'INV-004',
      client: 'Global Retail',
      amount: 22100,
      status: 'paid',
      dueDate: '2024-12-20',
      issueDate: '2024-12-01',
      services: ['Annual Audit', 'Tax Filing']
    },
    {
      id: 'INV-005',
      client: 'Digital Agency',
      amount: 5800,
      status: 'draft',
      dueDate: '2024-12-25',
      issueDate: '2024-12-05',
      services: ['Monthly Reconciliation']
    }
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,567',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      detail: 'vs last month'
    },
    {
      title: 'Active Clients',
      value: '47',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      detail: 'new this month'
    },
    {
      title: 'Pending Invoices',
      value: '$23,400',
      change: '-$5,200',
      trend: 'down',
      icon: Receipt,
      color: 'text-orange-600',
      detail: 'vs last month'
    },
    {
      title: 'Social Engagement',
      value: '4.2%',
      change: '+0.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600',
      detail: 'avg across platforms'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'onboarding': return 'bg-purple-100 text-purple-800';
      case 'ready': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return Linkedin;
      case 'instagram': return Instagram;
      case 'twitter': return Twitter;
      case 'facebook': return Facebook;
      case 'youtube': return Youtube;
      default: return Globe;
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return FileText;
      case 'video': return Video;
      case 'image': return Image;
      case 'event': return Calendar;
      case 'blog-post': return BookOpen;
      default: return FileText;
    }
  };

  const handleContentSubmit = (content: any) => {
    console.log('New content created:', content);
    // Here you would typically save to your backend
    // For now, we'll just log it
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading text-2xl font-bold text-foreground">
                  ClearLedger Admin
                </h1>
                <p className="text-sm text-muted-foreground">
                  Financial Management Dashboard
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search clients, tasks, content..."
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
              'clients', 
              'content-calendar', 
              'analytics', 
              'invoices', 
              'social-media', 
              'reports', 
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
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                      <Bar dataKey="expenses" fill="#EF4444" />
                      <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Client Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Client Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsLineChart data={clientGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="newClients" stroke="#3B82F6" strokeWidth={3} />
                      <Line type="monotone" dataKey="activeClients" stroke="#10B981" strokeWidth={3} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Service Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={serviceDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {serviceDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="space-y-4">
                    {serviceDistributionData.map((service, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: service.color }}
                          ></div>
                          <span className="text-sm font-medium">{service.name}</span>
                        </div>
                        <span className="text-sm font-bold">{service.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'content-calendar' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Content Calendar</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button onClick={() => setIsContentModalOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Content
                </Button>
              </div>
            </div>

            {/* Content Calendar Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar View */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contentCalendar.map((content) => {
                        const PlatformIcon = getPlatformIcon(content.platform);
                        const ContentTypeIcon = getContentTypeIcon(content.type);
                        return (
                          <div key={content.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                                <ContentTypeIcon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium text-foreground">{content.title}</h4>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                  <PlatformIcon className="w-4 h-4" />
                                  <span>{content.platform}</span>
                                  <span>•</span>
                                  <span className="capitalize">{content.type}</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                  {content.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="text-sm font-medium">{content.scheduledDate}</p>
                                <p className="text-xs text-muted-foreground">
                                  {content.engagement > 0 ? `${content.engagement} engagements` : 'Scheduled'}
                                </p>
                              </div>
                              <Badge className={getStatusColor(content.status)}>
                                {content.status}
                              </Badge>
                              <div className="flex space-x-1">
                                <Button variant="outline" size="sm">
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-3 h-3" />
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

              {/* Content Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Published This Month</span>
                          <span className="text-sm font-bold">23</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Scheduled</span>
                          <span className="text-sm font-bold">8</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Drafts</span>
                          <span className="text-sm font-bold">5</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Platform Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['LinkedIn', 'Instagram', 'Twitter', 'Facebook', 'YouTube'].map((platform) => {
                        const PlatformIcon = getPlatformIcon(platform);
                        return (
                          <div key={platform} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <PlatformIcon className="w-4 h-4" />
                              <span className="text-sm">{platform}</span>
                            </div>
                            <span className="text-sm font-bold">
                              {contentCalendar.filter(c => c.platform === platform).length}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Analytics & Insights</h2>
            
            {/* Advanced Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Social Media Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsBarChart data={socialMediaMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="platform" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="followers" fill="#3B82F6" />
                      <Bar dataKey="engagement" fill="#10B981" />
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
                      <Area type="monotone" dataKey="profit" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
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
                    <h3 className="text-2xl font-bold text-foreground">12.5%</h3>
                    <p className="text-sm text-muted-foreground">Revenue Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">47</h3>
                    <p className="text-sm text-muted-foreground">Active Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">98.5%</h3>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">24h</h3>
                    <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Invoice Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Invoice
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Invoices</CardTitle>
                  <div className="flex space-x-2">
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                          <Receipt className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{invoice.id}</h4>
                          <p className="text-sm text-muted-foreground">{invoice.client}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            {invoice.services.map((service, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-foreground">${invoice.amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Due: {invoice.dueDate}</p>
                        </div>
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status}
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'social-media' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Social Media Management</h2>
            
            {/* Platform Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {socialMediaMetrics.map((platform) => {
                const PlatformIcon = getPlatformIcon(platform.platform);
                return (
                  <Card key={platform.platform} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <PlatformIcon className="w-6 h-6 text-primary" />
                        <h3 className="font-semibold">{platform.platform}</h3>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-2xl font-bold">{platform.followers.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Followers</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold">{platform.engagement}%</p>
                          <p className="text-sm text-muted-foreground">Engagement</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{platform.posts}</p>
                          <p className="text-xs text-muted-foreground">Posts</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Content Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RechartsBarChart data={socialMediaMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="platform" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="reach" fill="#3B82F6" />
                    <Bar dataKey="engagement" fill="#10B981" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Client Management */}
        {activeTab === 'clients' && <ClientManagement />}

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

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Company Name</label>
                    <input
                      type="text"
                      defaultValue="ClearLedger Solutions"
                      className="w-full mt-1 p-2 border border-border rounded-lg bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      defaultValue="admin@yourclearledger.com"
                      className="w-full mt-1 p-2 border border-border rounded-lg bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full mt-1 p-2 border border-border rounded-lg bg-background text-foreground"
                    />
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
                    <span className="text-sm text-foreground">Email Notifications</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">SMS Notifications</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Task Reminders</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Client Updates</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Content Creation Modal */}
      <ContentCreationModal
        isOpen={isContentModalOpen}
        onClose={() => setIsContentModalOpen(false)}
        onSubmit={handleContentSubmit}
      />
    </div>
  );
};

export default Admin; 