import { useState } from 'react';
import { Bell, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AdminSidebar, { navSections } from '@/components/admin/AdminSidebar';
import AdminOverview from '@/components/admin/AdminOverview';
import WebsiteTrackingTab from '@/components/admin/WebsiteTrackingTab';
import ClientManagement from '@/components/ClientManagement';
import AdvancedBookkeepingDashboard from '@/components/AdvancedBookkeepingDashboard';
import TaxCenter from '@/components/admin/TaxCenter';
import PayrollManager from '@/components/admin/PayrollManager';
import ProfitLoss from '@/components/admin/ProfitLoss';
import ReconciliationCenter from '@/components/admin/ReconciliationCenter';
import WorkflowAutomation from '@/components/admin/WorkflowAutomation';
import ContentCreationModal from '@/components/ContentCreationModal';
import {
  Receipt, FileBarChart, Calendar, Share2, PieChart, Cog,
  DollarSign, Clock, Users, Download, Edit, Eye, Filter,
  FileText, Save, Archive, Plus as PlusIcon,
  Instagram, Twitter, Facebook, Linkedin, Youtube, Globe,
  BookOpen, Video, Image, Activity, Target, Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import {
  BarChart as RechartsBarChart, Bar,
  AreaChart as RechartsAreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);

  const activeLabel = navSections.flatMap(s => s.items).find(i => i.id === activeTab)?.label || 'Dashboard';

  // ─── Shared data for legacy tabs ───
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
    { id: 'INV-001', client: 'TechStart Inc.', amount: 12500, status: 'paid', dueDate: '2026-03-10', services: ['Monthly Bookkeeping', 'Tax Preparation'] },
    { id: 'INV-002', client: 'Green Solutions', amount: 8900, status: 'pending', dueDate: '2026-03-15', services: ['Payroll Processing', 'Financial Advisory'] },
    { id: 'INV-003', client: 'Innovate Labs', amount: 15300, status: 'overdue', dueDate: '2026-03-05', services: ['Quarterly Review', 'Compliance Reporting'] },
    { id: 'INV-004', client: 'Global Retail', amount: 22100, status: 'paid', dueDate: '2026-03-20', services: ['Annual Audit', 'Tax Filing'] },
    { id: 'INV-005', client: 'Digital Agency', amount: 5800, status: 'draft', dueDate: '2026-03-25', services: ['Monthly Reconciliation'] },
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

  const revenueData = [
    { month: 'Jan', revenue: 45000, profit: 13000 },
    { month: 'Feb', revenue: 52000, profit: 17000 },
    { month: 'Mar', revenue: 48000, profit: 15000 },
    { month: 'Apr', revenue: 61000, profit: 23000 },
    { month: 'May', revenue: 55000, profit: 19000 },
    { month: 'Jun', revenue: 67000, profit: 25000 },
  ];

  const getStatusColor = (status: string) => {
    const map: Record<string, string> = {
      paid: 'bg-[hsl(152,70%,45%)]/10 text-[hsl(152,70%,45%)]',
      pending: 'bg-[hsl(40,90%,55%)]/10 text-[hsl(40,90%,55%)]',
      overdue: 'bg-destructive/10 text-destructive',
      draft: 'bg-muted text-muted-foreground',
      scheduled: 'bg-[hsl(220,70%,55%)]/10 text-[hsl(220,70%,55%)]',
      published: 'bg-[hsl(152,70%,45%)]/10 text-[hsl(152,70%,45%)]',
    };
    return map[status] || 'bg-muted text-muted-foreground';
  };

  const getPlatformIcon = (p: string) => {
    const map: Record<string, any> = { linkedin: Linkedin, instagram: Instagram, twitter: Twitter, facebook: Facebook, youtube: Youtube };
    return map[p.toLowerCase()] || Globe;
  };

  const getContentTypeIcon = (t: string) => {
    const map: Record<string, any> = { blog: FileText, video: Video, image: Image, event: Calendar, 'blog-post': BookOpen };
    return map[t] || FileText;
  };

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-[72px]' : 'ml-[270px]'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-40 h-16 bg-card/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-6 gap-4">
          <div className="flex items-center gap-3">
            <h1 className="font-heading text-lg font-bold text-foreground">{activeLabel}</h1>
            <Badge variant="outline" className="text-[10px] font-mono border-primary/20 text-primary">Live</Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search clients, invoices..."
                className="pl-9 pr-4 py-2 text-sm border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 w-72"
              />
            </div>
            <Button variant="outline" size="icon" className="relative rounded-xl border-border/50">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-destructive rounded-full ring-2 ring-card" />
            </Button>
          </div>
        </header>

        <main className="p-6 max-w-[1440px]">
          {/* New dedicated tabs */}
          {activeTab === 'overview' && <AdminOverview />}
          {activeTab === 'website-tracking' && <WebsiteTrackingTab />}
          {activeTab === 'clients' && <ClientManagement />}
          {activeTab === 'bookkeeping' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground font-heading">Bookkeeping Dashboard</h2>
                  <p className="text-sm text-muted-foreground">Manage orders, track payments, and view financial data</p>
                </div>
                <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />New Order</Button>
              </div>
              <AdvancedBookkeepingDashboard />
            </div>
          )}
          {activeTab === 'tax-center' && <TaxCenter />}
          {activeTab === 'payroll' && <PayrollManager />}
          {activeTab === 'profit-loss' && <ProfitLoss />}
          {activeTab === 'reconciliation' && <ReconciliationCenter />}
          {activeTab === 'workflows' && <WorkflowAutomation />}

          {/* ─── INVOICES ─── */}
          {activeTab === 'invoices' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground font-heading">Invoicing</h2>
                  <p className="text-sm text-muted-foreground">Manage billing and payment status</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl"><Download className="w-4 h-4 mr-2" />Export</Button>
                  <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />Create Invoice</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Total Outstanding', value: `$${invoices.filter(i => i.status !== 'paid').reduce((s, i) => s + i.amount, 0).toLocaleString()}`, color: 'hsl(40, 90%, 55%)' },
                  { label: 'Paid This Month', value: `$${invoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0).toLocaleString()}`, color: 'hsl(152, 70%, 45%)' },
                  { label: 'Overdue', value: `${invoices.filter(i => i.status === 'overdue').length}`, color: 'hsl(0, 70%, 55%)' },
                  { label: 'Total Invoices', value: `${invoices.length}`, color: 'hsl(285, 72%, 60%)' },
                ].map((s, i) => (
                  <Card key={i} className="border-border/40 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: s.color }} />
                    <CardContent className="p-4">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">{s.label}</p>
                      <p className="text-xl font-bold mt-1 text-foreground">{s.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="border-border/40">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/30">
                          <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Invoice</th>
                          <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Client</th>
                          <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Services</th>
                          <th className="text-right text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Amount</th>
                          <th className="text-center text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Status</th>
                          <th className="text-right text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Due Date</th>
                          <th className="text-center text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoices.map((inv) => (
                          <tr key={inv.id} className="border-b border-border/30 hover:bg-accent/30 transition-colors">
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

          {/* ─── REPORTS ─── */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground font-heading">Report Builder</h2>
                  <p className="text-sm text-muted-foreground">Generate, schedule, and download financial reports</p>
                </div>
                <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />Custom Report</Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Reports Generated (MTD)', value: '12', icon: FileBarChart, color: 'hsl(285, 72%, 60%)' },
                  { label: 'Scheduled Reports', value: '5', icon: Clock, color: 'hsl(220, 70%, 55%)' },
                  { label: 'Total Downloads', value: '34', icon: Download, color: 'hsl(152, 70%, 45%)' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Card key={i} className="border-border/40 overflow-hidden relative">
                      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: s.color }} />
                      <CardContent className="p-5">
                        <Icon className="w-8 h-8 mb-2" style={{ color: s.color }} />
                        <p className="text-2xl font-bold font-heading">{s.value}</p>
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-base font-heading">Report Templates</CardTitle>
                  <CardDescription>Select a template to generate a report</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {reportTemplates.map((report, i) => {
                      const Icon = report.icon;
                      return (
                        <div key={i} className="flex items-center justify-between p-4 border border-border/40 rounded-xl hover:bg-accent/30 hover:border-primary/30 transition-all group cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
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
            </div>
          )}

          {/* ─── ANALYTICS ─── */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground font-heading">Analytics Hub</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Revenue Growth', value: '12.5%', icon: Target, color: 'hsl(152, 70%, 45%)' },
                  { label: 'Active Clients', value: '302', icon: Users, color: 'hsl(220, 70%, 55%)' },
                  { label: 'Satisfaction', value: '98.5%', icon: Zap, color: 'hsl(285, 72%, 60%)' },
                  { label: 'Avg Response', value: '24h', icon: Clock, color: 'hsl(40, 90%, 55%)' },
                ].map((kpi, i) => {
                  const Icon = kpi.icon;
                  return (
                    <Card key={i} className="border-border/40">
                      <CardContent className="p-5 text-center">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${kpi.color}15` }}>
                          <Icon className="w-6 h-6" style={{ color: kpi.color }} />
                        </div>
                        <p className="text-2xl font-bold text-foreground font-heading">{kpi.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{kpi.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-border/40">
                  <CardHeader className="pb-2"><CardTitle className="text-base font-heading">Social Performance</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsBarChart data={socialMediaMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                        <XAxis dataKey="platform" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis fontSize={11} tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Bar dataKey="followers" name="Followers" fill="hsl(285, 72%, 60%)" radius={[4, 4, 0, 0]} animationDuration={1200} />
                        <Bar dataKey="engagement" name="Engagement" fill="hsl(152, 70%, 45%)" radius={[4, 4, 0, 0]} animationDuration={1500} />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="border-border/40">
                  <CardHeader className="pb-2"><CardTitle className="text-base font-heading">Revenue Trend</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsAreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="aRevGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(285, 72%, 60%)" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="hsl(285, 72%, 60%)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                        <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" name="Revenue" stroke="hsl(285, 72%, 60%)" fill="url(#aRevGrad)" strokeWidth={2.5} animationDuration={1500} />
                        <Area type="monotone" dataKey="profit" name="Profit" stroke="hsl(152, 70%, 45%)" fill="hsl(152, 70%, 45%)" fillOpacity={0.1} strokeWidth={2} animationDuration={1800} />
                      </RechartsAreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* ─── CONTENT CALENDAR ─── */}
          {activeTab === 'content-calendar' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground font-heading">Content Calendar</h2>
                  <p className="text-sm text-muted-foreground">Plan, schedule, and manage your content pipeline</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-xl"><Filter className="w-4 h-4 mr-2" />Filter</Button>
                  <Button onClick={() => setIsContentModalOpen(true)} size="sm" className="rounded-xl bg-primary text-primary-foreground">
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
                      <Card key={content.id} className="hover:shadow-md transition-shadow border-border/40">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <ContentTypeIcon className="w-5 h-5 text-primary" />
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
                              <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-border/40"><Edit className="w-3 h-3" /></Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  <Card className="border-border/40">
                    <CardHeader className="pb-3"><CardTitle className="text-sm font-heading">Content Performance</CardTitle></CardHeader>
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
                </div>
              </div>
            </div>
          )}

          {/* ─── SOCIAL MEDIA ─── */}
          {activeTab === 'social-media' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground font-heading">Social Media</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {socialMediaMetrics.map((p) => {
                  const Icon = getPlatformIcon(p.platform);
                  return (
                    <Card key={p.platform} className="hover:shadow-md transition-shadow border-border/40">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5 text-muted-foreground" />
                          <span className="font-medium text-sm">{p.platform}</span>
                        </div>
                        <p className="text-2xl font-bold font-heading">{p.followers.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Followers</p>
                        <div className="mt-3 pt-3 border-t border-border/40 flex justify-between text-xs">
                          <span>{p.engagement}% eng.</span>
                          <span>{p.reach.toLocaleString()} reach</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <Card className="border-border/40">
                <CardHeader className="pb-2"><CardTitle className="text-base font-heading">Performance Comparison</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <RechartsBarChart data={socialMediaMetrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                      <XAxis dataKey="platform" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis fontSize={11} tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar dataKey="reach" name="Reach" fill="hsl(285, 72%, 60%)" radius={[4, 4, 0, 0]} animationDuration={1200} />
                      <Bar dataKey="followers" name="Followers" fill="hsl(220, 70%, 55%)" radius={[4, 4, 0, 0]} animationDuration={1500} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {/* ─── SETTINGS ─── */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground font-heading">Settings</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-border/40">
                  <CardHeader><CardTitle className="text-base font-heading">Account</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: 'Company Name', value: 'ClearLedger Solutions', type: 'text' },
                      { label: 'Email', value: 'jj@yourclearledger.com', type: 'email' },
                      { label: 'Phone', value: '(214) 555-0123', type: 'tel' },
                      { label: 'Website', value: 'www.yourclearledger.com', type: 'url' },
                    ].map((field, i) => (
                      <div key={i}>
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{field.label}</label>
                        <input
                          type={field.type}
                          defaultValue={field.value}
                          className="w-full mt-1.5 px-3 py-2.5 text-sm border border-border/50 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                        />
                      </div>
                    ))}
                    <Button className="rounded-xl bg-primary text-primary-foreground w-full"><Save className="w-4 h-4 mr-2" />Save Changes</Button>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card className="border-border/40">
                    <CardHeader><CardTitle className="text-base font-heading">Notifications</CardTitle></CardHeader>
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
                  <Card className="border-border/40">
                    <CardHeader><CardTitle className="text-base font-heading">Integrations</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      {[
                        { name: 'Google Analytics', status: 'Connected', tag: 'G-1TZ6VX86KX' },
                        { name: 'Google Ads', status: 'Connected', tag: 'AW-17027608656' },
                        { name: 'Stripe', status: 'Setup Required', tag: null },
                        { name: 'QuickBooks Online', status: 'Setup Required', tag: null },
                      ].map((int, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border border-border/40 rounded-xl">
                          <div>
                            <p className="text-sm font-medium">{int.name}</p>
                            {int.tag && <p className="text-[10px] font-mono text-muted-foreground">{int.tag}</p>}
                          </div>
                          <Badge variant={int.status === 'Connected' ? 'default' : 'outline'} className={int.status === 'Connected' ? 'bg-[hsl(152,70%,45%)]/10 text-[hsl(152,70%,45%)]' : ''}>
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

      <ContentCreationModal
        isOpen={isContentModalOpen}
        onClose={() => setIsContentModalOpen(false)}
        onSubmit={(content: any) => console.log('New content:', content)}
      />
    </div>
  );
};

export default Admin;
