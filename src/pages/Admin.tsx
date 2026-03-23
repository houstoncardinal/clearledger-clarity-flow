import { useState, useEffect } from 'react';
import { 
  BarChart3, TrendingUp, Users, DollarSign, FileText, Settings, LogOut, Bell, Search,
  Calendar, Clock, CheckCircle, AlertCircle, ArrowUpRight, ArrowDownRight, MoreHorizontal,
  Plus, Filter, Mail, Phone, MapPin, Edit, Trash2, Eye, Download, Upload, RefreshCw,
  Instagram, Twitter, Facebook, Linkedin, Youtube, Activity, Target, Zap, Shield, Award,
  Globe, CreditCard, Receipt, Star, Heart, MessageCircle, Share2, BookOpen, PenTool,
  Image, Video, Link, Hash, AtSign, Save, ExternalLink, Archive, Inbox, Send, Flag,
  Bookmark, Tag, Folder, MousePointerClick, Megaphone, Monitor, ChevronLeft, ChevronRight,
  LayoutDashboard, PieChart, Wallet, FileBarChart, Cog, Layers, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import ContentCreationModal from '@/components/ContentCreationModal';
import ClientManagement from '@/components/ClientManagement';
import { getBookkeepingOrders, getOrderStatistics } from '@/utils/bookkeepingData';
import AdvancedBookkeepingDashboard from '@/components/AdvancedBookkeepingDashboard';
import WebsiteTrackingTab from '@/components/admin/WebsiteTrackingTab';
import { 
  LineChart as RechartsLineChart, Line, AreaChart as RechartsAreaChart, Area,
  BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// ─── NAV CONFIG ────────────────────────────────────────────────────────────────
const navSections = [
  {
    label: 'Core',
    items: [
      { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'website-tracking', label: 'Website & Marketing', icon: MousePointerClick },
      { id: 'clients', label: 'Client Management', icon: Users },
      { id: 'bookkeeping', label: 'Bookkeeping', icon: BookOpen },
    ],
  },
  {
    label: 'Marketing',
    items: [
      { id: 'content-calendar', label: 'Content Calendar', icon: Calendar },
      { id: 'social-media', label: 'Social Media', icon: Share2 },
      { id: 'analytics', label: 'Analytics', icon: PieChart },
    ],
  },
  {
    label: 'Finance',
    items: [
      { id: 'invoices', label: 'Invoices', icon: Receipt },
      { id: 'reports', label: 'Reports', icon: FileBarChart },
    ],
  },
  {
    label: 'System',
    items: [
      { id: 'settings', label: 'Settings', icon: Cog },
    ],
  },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);

  // ─── MOCK DATA ───────────────────────────────────────────────────────────────
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
    { month: 'Dec', revenue: 89000, expenses: 55000, profit: 34000 },
  ];

  const clientGrowthData = [
    { month: 'Jan', newClients: 12, activeClients: 45 },
    { month: 'Feb', newClients: 15, activeClients: 58 },
    { month: 'Mar', newClients: 18, activeClients: 72 },
    { month: 'Apr', newClients: 22, activeClients: 89 },
    { month: 'May', newClients: 25, activeClients: 108 },
    { month: 'Jun', newClients: 28, activeClients: 128 },
    { month: 'Jul', newClients: 32, activeClients: 152 },
    { month: 'Aug', newClients: 35, activeClients: 178 },
    { month: 'Sep', newClients: 38, activeClients: 205 },
    { month: 'Oct', newClients: 42, activeClients: 235 },
    { month: 'Nov', newClients: 45, activeClients: 268 },
    { month: 'Dec', newClients: 48, activeClients: 302 },
  ];

  const serviceDistributionData = [
    { name: 'QuickBooks', value: 35, color: '#7c3aed' },
    { name: 'Bookkeeping', value: 25, color: '#3b82f6' },
    { name: 'Tax Prep', value: 20, color: '#10b981' },
    { name: 'Payroll', value: 15, color: '#f59e0b' },
    { name: 'Advisory', value: 5, color: '#ef4444' },
  ];

  const socialMediaMetrics = [
    { platform: 'LinkedIn', followers: 2847, engagement: 4.2, posts: 156, reach: 12500 },
    { platform: 'Instagram', followers: 1923, engagement: 6.8, posts: 203, reach: 8900 },
    { platform: 'Twitter', followers: 3456, engagement: 3.1, posts: 89, reach: 15600 },
    { platform: 'Facebook', followers: 1234, engagement: 2.8, posts: 67, reach: 5400 },
    { platform: 'YouTube', followers: 892, engagement: 8.5, posts: 34, reach: 3200 },
  ];

  const contentCalendar = [
    { id: 1, title: 'Tax Season Tips for Small Businesses', type: 'blog', platform: 'LinkedIn', scheduledDate: '2026-03-25', status: 'scheduled', tags: ['tax', 'small-business'], engagement: 0 },
    { id: 2, title: 'QuickBooks vs Manual Bookkeeping', type: 'video', platform: 'YouTube', scheduledDate: '2026-03-26', status: 'draft', tags: ['quickbooks', 'comparison'], engagement: 0 },
    { id: 3, title: 'Financial Health Check Infographic', type: 'image', platform: 'Instagram', scheduledDate: '2026-03-27', status: 'published', tags: ['infographic', 'tips'], engagement: 234 },
    { id: 4, title: 'Year-End Tax Planning Webinar', type: 'event', platform: 'LinkedIn', scheduledDate: '2026-03-30', status: 'scheduled', tags: ['webinar', 'tax-planning'], engagement: 0 },
    { id: 5, title: 'Client Success Story: Tech Startup', type: 'blog-post', platform: 'Website', scheduledDate: '2026-03-28', status: 'draft', tags: ['success-story', 'tech'], engagement: 0 },
  ];

  const invoices = [
    { id: 'INV-001', client: 'TechStart Inc.', amount: 12500, status: 'paid', dueDate: '2026-03-10', issueDate: '2026-02-25', services: ['Monthly Bookkeeping', 'Tax Preparation'] },
    { id: 'INV-002', client: 'Green Solutions', amount: 8900, status: 'pending', dueDate: '2026-03-15', issueDate: '2026-02-28', services: ['Payroll Processing', 'Financial Advisory'] },
    { id: 'INV-003', client: 'Innovate Labs', amount: 15300, status: 'overdue', dueDate: '2026-03-05', issueDate: '2026-02-20', services: ['Quarterly Review', 'Compliance Reporting'] },
    { id: 'INV-004', client: 'Global Retail', amount: 22100, status: 'paid', dueDate: '2026-03-20', issueDate: '2026-03-01', services: ['Annual Audit', 'Tax Filing'] },
    { id: 'INV-005', client: 'Digital Agency', amount: 5800, status: 'draft', dueDate: '2026-03-25', issueDate: '2026-03-05', services: ['Monthly Reconciliation'] },
  ];

  const stats = [
    { title: 'Total Revenue', value: '$124,567', change: '+12.5%', trend: 'up' as const, icon: DollarSign, gradient: 'from-emerald-500 to-teal-600' },
    { title: 'Active Clients', value: '47', change: '+3 new', trend: 'up' as const, icon: Users, gradient: 'from-blue-500 to-indigo-600' },
    { title: 'Pending Invoices', value: '$23,400', change: '-$5,200', trend: 'down' as const, icon: Receipt, gradient: 'from-amber-500 to-orange-600' },
    { title: 'Engagement Rate', value: '4.2%', change: '+0.8%', trend: 'up' as const, icon: TrendingUp, gradient: 'from-purple-500 to-fuchsia-600' },
  ];

  const reportTemplates = [
    { name: 'Monthly P&L Summary', description: 'Profit & loss breakdown by category', icon: FileBarChart, frequency: 'Monthly' },
    { name: 'Client Revenue Report', description: 'Revenue per client with trends', icon: DollarSign, frequency: 'Monthly' },
    { name: 'Tax Liability Forecast', description: 'Estimated quarterly tax obligations', icon: Receipt, frequency: 'Quarterly' },
    { name: 'Cash Flow Statement', description: 'Inflows and outflows analysis', icon: Activity, frequency: 'Weekly' },
    { name: 'Accounts Receivable Aging', description: 'Outstanding invoices by age', icon: Clock, frequency: 'Weekly' },
    { name: 'Payroll Summary', description: 'Employee compensation breakdown', icon: Users, frequency: 'Bi-Weekly' },
    { name: 'Expense Category Analysis', description: 'Spending patterns by category', icon: PieChart, frequency: 'Monthly' },
    { name: 'Year-End Tax Package', description: 'Complete tax documentation bundle', icon: Archive, frequency: 'Annual' },
  ];

  // ─── HELPERS ─────────────────────────────────────────────────────────────────
  const getStatusColor = (status: string) => {
    const map: Record<string, string> = {
      completed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
      pending: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      'in-progress': 'bg-blue-100 text-blue-800',
      active: 'bg-emerald-100 text-emerald-800',
      scheduled: 'bg-blue-100 text-blue-800',
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-emerald-100 text-emerald-800',
      paid: 'bg-emerald-100 text-emerald-800',
      overdue: 'bg-red-100 text-red-800',
    };
    return map[status] || 'bg-gray-100 text-gray-800';
  };

  const getPlatformIcon = (p: string) => {
    const map: Record<string, any> = { linkedin: Linkedin, instagram: Instagram, twitter: Twitter, facebook: Facebook, youtube: Youtube };
    return map[p.toLowerCase()] || Globe;
  };

  const getContentTypeIcon = (t: string) => {
    const map: Record<string, any> = { blog: FileText, video: Video, image: Image, event: Calendar, 'blog-post': BookOpen };
    return map[t] || FileText;
  };

  const handleContentSubmit = (content: any) => {
    console.log('New content created:', content);
  };

  const activeLabel = navSections.flatMap(s => s.items).find(i => i.id === activeTab)?.label || 'Dashboard';

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background flex">
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* LEFT SIDEBAR                                                          */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col border-r border-border bg-card transition-all duration-300 ease-out ${
          sidebarCollapsed ? 'w-[72px]' : 'w-[260px]'
        }`}
      >
        {/* Logo area */}
        <div className="h-16 flex items-center px-4 border-b border-border gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/25">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {!sidebarCollapsed && (
            <div className="overflow-hidden">
              <p className="font-heading text-sm font-bold text-foreground leading-tight truncate">ClearLedger</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Admin Console</p>
            </div>
          )}
        </div>

        {/* Nav sections */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {navSections.map((section) => (
            <div key={section.label}>
              {!sidebarCollapsed && (
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-2">
                  {section.label}
                </p>
              )}
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      title={sidebarCollapsed ? item.label : undefined}
                      className={`
                        w-full flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-200
                        ${sidebarCollapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2.5'}
                        ${isActive
                          ? 'bg-gradient-to-r from-purple-500/15 to-indigo-500/10 text-purple-700 dark:text-purple-300 shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                        }
                      `}
                    >
                      <div className={`shrink-0 ${isActive ? 'text-purple-600 dark:text-purple-400' : ''}`}>
                        <Icon className="w-[18px] h-[18px]" />
                      </div>
                      {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
                      {isActive && !sidebarCollapsed && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom controls */}
        <div className="border-t border-border p-3 space-y-2 shrink-0">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`w-full flex items-center gap-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors ${
              sidebarCollapsed ? 'justify-center px-0 py-2' : 'px-3 py-2'
            }`}
          >
            {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            {!sidebarCollapsed && <span>Collapse</span>}
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className={`w-full flex items-center gap-3 rounded-xl text-sm text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors ${
              sidebarCollapsed ? 'justify-center px-0 py-2' : 'px-3 py-2'
            }`}
          >
            <LogOut className="w-4 h-4" />
            {!sidebarCollapsed && <span>Exit to Site</span>}
          </button>
        </div>
      </aside>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* MAIN CONTENT AREA                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-[72px]' : 'ml-[260px]'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-40 h-16 bg-card/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 gap-4">
          <div className="flex items-center gap-3">
            <h1 className="font-heading text-xl font-bold text-foreground">{activeLabel}</h1>
            <Badge variant="outline" className="text-xs font-mono">Live</Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 text-sm border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring w-64"
              />
            </div>
            <Button variant="outline" size="icon" className="relative rounded-xl">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-card" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 max-w-[1400px]">
          {/* ─── OVERVIEW ─────────────────────────────────────────────────── */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Welcome banner */}
              <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-40" />
                <div className="relative">
                  <h2 className="text-2xl font-bold">Welcome back, Admin</h2>
                  <p className="text-purple-100 mt-1 text-sm">Here's what's happening with ClearLedger today.</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/60">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{stat.title}</p>
                            <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                          </div>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex items-center mt-3 text-xs">
                          {stat.trend === 'up' ? (
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-3.5 h-3.5 text-red-500 mr-1" />
                          )}
                          <span className={stat.trend === 'up' ? 'text-emerald-600 font-semibold' : 'text-red-500 font-semibold'}>
                            {stat.change}
                          </span>
                          <span className="text-muted-foreground ml-1">vs last month</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={280}>
                      <ComposedChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="month" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="revenue" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.15} />
                        <Bar dataKey="expenses" fill="#ef4444" opacity={0.7} radius={[4, 4, 0, 0]} />
                        <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2.5} dot={false} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Client Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={280}>
                      <RechartsAreaChart data={clientGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="month" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="activeClients" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} />
                        <Area type="monotone" dataKey="newClients" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.15} />
                      </RechartsAreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Service distribution */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Service Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <ResponsiveContainer width="100%" height={260}>
                      <RechartsPieChart>
                        <Pie data={serviceDistributionData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={4} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                          {serviceDistributionData.map((entry, i) => (
                            <Cell key={i} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                    <div className="space-y-3">
                      {serviceDistributionData.map((s, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                            <span className="text-sm">{s.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Progress value={s.value} className="w-24 h-2" />
                            <span className="text-sm font-bold w-10 text-right">{s.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ─── WEBSITE TRACKING ─────────────────────────────────────────── */}
          {activeTab === 'website-tracking' && <WebsiteTrackingTab />}

          {/* ─── CLIENTS ──────────────────────────────────────────────────── */}
          {activeTab === 'clients' && <ClientManagement />}

          {/* ─── BOOKKEEPING ──────────────────────────────────────────────── */}
          {activeTab === 'bookkeeping' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Bookkeeping Dashboard</h2>
                  <p className="text-sm text-muted-foreground">Manage orders, track payments, and view financial data</p>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl">
                  <Plus className="w-4 h-4 mr-2" />
                  New Order
                </Button>
              </div>
              <AdvancedBookkeepingDashboard />
            </div>
          )}

          {/* ─── CONTENT CALENDAR ─────────────────────────────────────────── */}
          {activeTab === 'content-calendar' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Content Calendar</h2>
                  <p className="text-sm text-muted-foreground">Plan, schedule, and manage your content pipeline</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl"><Filter className="w-4 h-4 mr-2" />Filter</Button>
                  <Button onClick={() => setIsContentModalOpen(true)} className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <Plus className="w-4 h-4 mr-2" />Create Content
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  {contentCalendar.map((content) => {
                    const PlatformIcon = getPlatformIcon(content.platform);
                    const ContentTypeIcon = getContentTypeIcon(content.type);
                    return (
                      <Card key={content.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                                <ContentTypeIcon className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-foreground text-sm">{content.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                  <PlatformIcon className="w-3 h-3" />
                                  <span>{content.platform}</span>
                                  <span>•</span>
                                  <span>{content.scheduledDate}</span>
                                </div>
                                <div className="flex gap-1 mt-1">
                                  {content.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] bg-accent px-1.5 py-0.5 rounded text-accent-foreground">#{tag}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getStatusColor(content.status)}>{content.status}</Badge>
                              <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg"><Edit className="w-3 h-3" /></Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3"><CardTitle className="text-sm">Content Performance</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { label: 'Published This Month', value: 23, progress: 75 },
                        { label: 'Scheduled', value: 8, progress: 25 },
                        { label: 'Drafts', value: 5, progress: 15 },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">{item.label}</span>
                            <span className="text-xs font-bold">{item.value}</span>
                          </div>
                          <Progress value={item.progress} className="h-1.5" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3"><CardTitle className="text-sm">Platform Split</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                      {['LinkedIn', 'Instagram', 'Twitter', 'Facebook', 'YouTube'].map((p) => {
                        const Icon = getPlatformIcon(p);
                        return (
                          <div key={p} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2"><Icon className="w-4 h-4 text-muted-foreground" /><span>{p}</span></div>
                            <Badge variant="outline" className="text-xs">{contentCalendar.filter(c => c.platform === p).length}</Badge>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* ─── SOCIAL MEDIA ─────────────────────────────────────────────── */}
          {activeTab === 'social-media' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Social Media</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {socialMediaMetrics.map((p) => {
                  const Icon = getPlatformIcon(p.platform);
                  return (
                    <Card key={p.platform} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5 text-muted-foreground" />
                          <span className="font-medium text-sm">{p.platform}</span>
                        </div>
                        <p className="text-2xl font-bold">{p.followers.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <div className="mt-3 pt-3 border-t border-border flex justify-between text-xs">
                          <span>{p.engagement}% eng.</span>
                          <span>{p.reach.toLocaleString()} reach</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">Performance Comparison</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <RechartsBarChart data={socialMediaMetrics}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="platform" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="reach" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="followers" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ─── ANALYTICS ────────────────────────────────────────────────── */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Analytics & Insights</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Revenue Growth', value: '12.5%', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600' },
                  { label: 'Active Clients', value: '47', icon: Users, gradient: 'from-blue-500 to-indigo-600' },
                  { label: 'Satisfaction', value: '98.5%', icon: Target, gradient: 'from-purple-500 to-fuchsia-600' },
                  { label: 'Avg Response', value: '24h', icon: Zap, gradient: 'from-amber-500 to-orange-600' },
                ].map((kpi, i) => {
                  const Icon = kpi.icon;
                  return (
                    <Card key={i}>
                      <CardContent className="p-5 text-center">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${kpi.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{kpi.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">Social Performance</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsBarChart data={socialMediaMetrics}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="platform" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Bar dataKey="followers" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="engagement" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2"><CardTitle className="text-base">Revenue Trend</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsAreaChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                        <XAxis dataKey="month" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.15} />
                        <Area type="monotone" dataKey="profit" stroke="#10b981" fill="#10b981" fillOpacity={0.15} />
                      </RechartsAreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* ─── INVOICES ─────────────────────────────────────────────────── */}
          {activeTab === 'invoices' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Invoices</h2>
                  <p className="text-sm text-muted-foreground">Manage billing and payment status</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl"><Download className="w-4 h-4 mr-2" />Export</Button>
                  <Button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white"><Plus className="w-4 h-4 mr-2" />Create Invoice</Button>
                </div>
              </div>

              {/* Summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Total Outstanding', value: `$${invoices.filter(i => i.status !== 'paid').reduce((s, i) => s + i.amount, 0).toLocaleString()}`, color: 'text-amber-600' },
                  { label: 'Paid This Month', value: `$${invoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0).toLocaleString()}`, color: 'text-emerald-600' },
                  { label: 'Overdue', value: `${invoices.filter(i => i.status === 'overdue').length}`, color: 'text-red-600' },
                  { label: 'Total Invoices', value: `${invoices.length}`, color: 'text-foreground' },
                ].map((s, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
                      <p className={`text-xl font-bold mt-1 ${s.color}`}>{s.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/30">
                          <th className="text-left text-xs font-medium text-muted-foreground p-4">Invoice</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-4">Client</th>
                          <th className="text-left text-xs font-medium text-muted-foreground p-4">Services</th>
                          <th className="text-right text-xs font-medium text-muted-foreground p-4">Amount</th>
                          <th className="text-center text-xs font-medium text-muted-foreground p-4">Status</th>
                          <th className="text-right text-xs font-medium text-muted-foreground p-4">Due Date</th>
                          <th className="text-center text-xs font-medium text-muted-foreground p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoices.map((inv) => (
                          <tr key={inv.id} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                            <td className="p-4 font-mono text-sm font-medium">{inv.id}</td>
                            <td className="p-4 text-sm">{inv.client}</td>
                            <td className="p-4">
                              <div className="flex gap-1 flex-wrap">
                                {inv.services.map((s, i) => (
                                  <Badge key={i} variant="outline" className="text-[10px]">{s}</Badge>
                                ))}
                              </div>
                            </td>
                            <td className="p-4 text-right font-semibold text-sm">${inv.amount.toLocaleString()}</td>
                            <td className="p-4 text-center"><Badge className={getStatusColor(inv.status)}>{inv.status}</Badge></td>
                            <td className="p-4 text-right text-sm text-muted-foreground">{inv.dueDate}</td>
                            <td className="p-4">
                              <div className="flex justify-center gap-1">
                                <Button variant="ghost" size="icon" className="h-7 w-7"><Eye className="w-3 h-3" /></Button>
                                <Button variant="ghost" size="icon" className="h-7 w-7"><Edit className="w-3 h-3" /></Button>
                                <Button variant="ghost" size="icon" className="h-7 w-7"><Download className="w-3 h-3" /></Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ─── REPORTS ──────────────────────────────────────────────────── */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Reports</h2>
                  <p className="text-sm text-muted-foreground">Generate, schedule, and download financial reports</p>
                </div>
                <Button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />Custom Report
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border-purple-500/20">
                  <CardContent className="p-5">
                    <FileBarChart className="w-8 h-8 text-purple-600 mb-2" />
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-muted-foreground">Reports Generated (MTD)</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/20">
                  <CardContent className="p-5">
                    <Clock className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-xs text-muted-foreground">Scheduled Reports</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/20">
                  <CardContent className="p-5">
                    <Download className="w-8 h-8 text-emerald-600 mb-2" />
                    <p className="text-2xl font-bold">34</p>
                    <p className="text-xs text-muted-foreground">Total Downloads</p>
                  </CardContent>
                </Card>
              </div>

              {/* Report templates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Report Templates</CardTitle>
                  <CardDescription>Select a template to generate a report</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {reportTemplates.map((report, i) => {
                      const Icon = report.icon;
                      return (
                        <div key={i} className="flex items-center justify-between p-4 border border-border rounded-xl hover:bg-accent/30 hover:border-purple-500/30 transition-all group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/15 to-indigo-500/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{report.name}</p>
                              <p className="text-xs text-muted-foreground">{report.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-[10px]">{report.frequency}</Badge>
                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">Generate</Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recent reports */}
              <Card>
                <CardHeader><CardTitle className="text-base">Recent Reports</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: 'February P&L Summary', date: 'Mar 3, 2026', size: '245 KB', type: 'PDF' },
                      { name: 'Q4 2025 Tax Forecast', date: 'Mar 1, 2026', size: '1.2 MB', type: 'XLSX' },
                      { name: 'Client Revenue — February', date: 'Feb 28, 2026', size: '890 KB', type: 'PDF' },
                      { name: 'Payroll Summary — Feb 2026', date: 'Feb 15, 2026', size: '340 KB', type: 'PDF' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{r.name}</p>
                            <p className="text-xs text-muted-foreground">{r.date} • {r.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px]">{r.type}</Badge>
                          <Button variant="ghost" size="icon" className="h-7 w-7"><Download className="w-3 h-3" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ─── SETTINGS ─────────────────────────────────────────────────── */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Settings</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Account */}
                <Card>
                  <CardHeader><CardTitle className="text-base">Account</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: 'Company Name', value: 'ClearLedger Solutions', type: 'text' },
                      { label: 'Email', value: 'jj@yourclearledger.com', type: 'email' },
                      { label: 'Phone', value: '(214) 555-0123', type: 'tel' },
                      { label: 'Website', value: 'www.yourclearledger.com', type: 'url' },
                    ].map((field, i) => (
                      <div key={i}>
                        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{field.label}</label>
                        <input
                          type={field.type}
                          defaultValue={field.value}
                          className="w-full mt-1.5 px-3 py-2 text-sm border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    ))}
                    <Button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full"><Save className="w-4 h-4 mr-2" />Save Changes</Button>
                  </CardContent>
                </Card>

                {/* Notifications */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader><CardTitle className="text-base">Notifications</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { label: 'Email Notifications', desc: 'Receive email alerts for new leads', default: true },
                        { label: 'SMS Notifications', desc: 'Get text alerts for urgent items', default: false },
                        { label: 'Task Reminders', desc: 'Daily digest of upcoming tasks', default: true },
                        { label: 'Client Updates', desc: 'Notify when clients update info', default: true },
                        { label: 'Weekly Report', desc: 'Automated weekly performance email', default: true },
                      ].map((n, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-foreground">{n.label}</p>
                            <p className="text-xs text-muted-foreground">{n.desc}</p>
                          </div>
                          <Switch defaultChecked={n.default} />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader><CardTitle className="text-base">Integrations</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { name: 'Google Analytics', status: 'Connected', tag: 'G-1TZ6VX86KX' },
                        { name: 'Google Ads', status: 'Connected', tag: 'AW-17027608656' },
                        { name: 'Stripe', status: 'Setup Required', tag: null },
                        { name: 'QuickBooks Online', status: 'Setup Required', tag: null },
                      ].map((int, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border border-border rounded-xl">
                          <div>
                            <p className="text-sm font-medium">{int.name}</p>
                            {int.tag && <p className="text-[10px] font-mono text-muted-foreground">{int.tag}</p>}
                          </div>
                          <Badge variant={int.status === 'Connected' ? 'default' : 'outline'} className={int.status === 'Connected' ? 'bg-emerald-100 text-emerald-800' : ''}>
                            {int.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

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
