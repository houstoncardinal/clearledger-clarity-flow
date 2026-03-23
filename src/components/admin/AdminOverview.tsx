import { useState, useEffect } from 'react';
import {
  DollarSign, Users, Receipt, TrendingUp, ArrowUpRight, ArrowDownRight,
  Clock, CheckCircle, AlertCircle, CalendarDays, Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, AreaChart, PieChart, Pie, Cell, RadialBarChart, RadialBar
} from 'recharts';

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
  { month: 'Jan', active: 45, new: 12 },
  { month: 'Feb', active: 58, new: 15 },
  { month: 'Mar', active: 72, new: 18 },
  { month: 'Apr', active: 89, new: 22 },
  { month: 'May', active: 108, new: 25 },
  { month: 'Jun', active: 128, new: 28 },
  { month: 'Jul', active: 152, new: 32 },
  { month: 'Aug', active: 178, new: 35 },
  { month: 'Sep', active: 205, new: 38 },
  { month: 'Oct', active: 235, new: 42 },
  { month: 'Nov', active: 268, new: 45 },
  { month: 'Dec', active: 302, new: 48 },
];

const serviceData = [
  { name: 'QuickBooks', value: 35, fill: 'hsl(285, 72%, 60%)' },
  { name: 'Bookkeeping', value: 25, fill: 'hsl(220, 70%, 55%)' },
  { name: 'Tax Prep', value: 20, fill: 'hsl(152, 70%, 45%)' },
  { name: 'Payroll', value: 15, fill: 'hsl(40, 90%, 55%)' },
  { name: 'Advisory', value: 5, fill: 'hsl(0, 70%, 55%)' },
];

const cashFlowData = [
  { name: 'Cash In', value: 89, fill: 'hsl(152, 70%, 45%)' },
  { name: 'Cash Out', value: 55, fill: 'hsl(0, 70%, 55%)' },
  { name: 'Net', value: 34, fill: 'hsl(285, 72%, 60%)' },
];

const stats = [
  { title: 'Monthly Revenue', value: '$89,234', change: '+12.5%', trend: 'up' as const, icon: DollarSign, color: 'hsl(152, 70%, 45%)' },
  { title: 'Active Clients', value: '302', change: '+48 this quarter', trend: 'up' as const, icon: Users, color: 'hsl(220, 70%, 55%)' },
  { title: 'Outstanding A/R', value: '$23,400', change: '3 overdue', trend: 'down' as const, icon: Receipt, color: 'hsl(40, 90%, 55%)' },
  { title: 'Profit Margin', value: '38.2%', change: '+2.1%', trend: 'up' as const, icon: TrendingUp, color: 'hsl(285, 72%, 60%)' },
];

const upcomingTasks = [
  { task: 'Q1 Tax Filing — TechStart Inc.', due: 'Today', priority: 'urgent', status: 'in-progress' },
  { task: 'Monthly Reconciliation — Green Solutions', due: 'Tomorrow', priority: 'high', status: 'pending' },
  { task: 'Payroll Processing — Global Retail', due: 'Mar 25', priority: 'medium', status: 'pending' },
  { task: 'Annual Audit Prep — Innovate Labs', due: 'Mar 28', priority: 'high', status: 'pending' },
  { task: 'QuickBooks Migration — Digital Agency', due: 'Mar 30', priority: 'medium', status: 'scheduled' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-3 shadow-xl">
      <p className="text-xs font-bold text-foreground mb-1.5">{label}</p>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-semibold text-foreground">
            {typeof entry.value === 'number' && entry.value > 100
              ? `$${entry.value.toLocaleString()}`
              : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const AdminOverview = () => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const targets = [89234, 302, 23400, 38.2];
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedStats(targets.map(t => Math.round(t * eased * 10) / 10));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const formatAnimatedValue = (val: number, idx: number) => {
    if (idx === 0) return `$${Math.round(val).toLocaleString()}`;
    if (idx === 1) return Math.round(val).toString();
    if (idx === 2) return `$${Math.round(val).toLocaleString()}`;
    return `${val.toFixed(1)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="rounded-2xl bg-gradient-to-r from-primary via-[hsl(260,70%,50%)] to-[hsl(240,50%,35%)] p-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(285 90% 80% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(220 70% 80% / 0.2) 0%, transparent 50%)' }} />
        <div className="absolute top-4 right-6 opacity-10">
          <Sparkles className="w-32 h-32" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <CalendarDays className="w-4 h-4 opacity-80" />
            <span className="text-sm opacity-80">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h2 className="text-2xl font-bold">Welcome back, Admin</h2>
          <p className="mt-1 text-sm opacity-80">Your business is performing 12.5% above last month. 3 tasks need attention today.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border-border/40 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: stat.color }} />
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground mt-1 tabular-nums font-heading">
                      {formatAnimatedValue(animatedStats[i], i)}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="flex items-center mt-3 text-xs">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-3.5 h-3.5 mr-1" style={{ color: 'hsl(152, 70%, 45%)' }} />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5 mr-1" style={{ color: 'hsl(40, 90%, 55%)' }} />
                  )}
                  <span className="font-semibold" style={{ color: stat.trend === 'up' ? 'hsl(152, 70%, 45%)' : 'hsl(40, 90%, 55%)' }}>
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue + Cash Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/40">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-heading">Revenue & Profitability</CardTitle>
              <Badge variant="outline" className="text-[10px] font-mono">FY 2026</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(285, 72%, 60%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(285, 72%, 60%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(152, 70%, 45%)" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="hsl(152, 70%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="hsl(285, 72%, 60%)" fill="url(#revenueGrad)" strokeWidth={2.5} animationDuration={1500} animationEasing="ease-out" />
                <Bar dataKey="expenses" name="Expenses" fill="hsl(0, 70%, 55%)" opacity={0.25} radius={[4, 4, 0, 0]} animationDuration={1200} />
                <Line type="monotone" dataKey="profit" name="Profit" stroke="hsl(152, 70%, 45%)" strokeWidth={2.5} dot={{ r: 3, fill: 'hsl(152, 70%, 45%)' }} activeDot={{ r: 6, strokeWidth: 2 }} animationDuration={1800} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading">Service Mix</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%" cy="50%"
                  innerRadius={50} outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  animationDuration={1500}
                  animationEasing="ease-out"
                >
                  {serviceData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-2">
              {serviceData.map((s, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.fill }} />
                    <span className="text-muted-foreground">{s.name}</span>
                  </div>
                  <span className="font-bold">{s.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client Growth + Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading">Client Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={clientGrowthData}>
                <defs>
                  <linearGradient id="activeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(220, 70%, 55%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(220, 70%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Area type="monotone" dataKey="active" name="Active Clients" stroke="hsl(220, 70%, 55%)" fill="url(#activeGrad)" strokeWidth={2.5} animationDuration={1500} />
                <Area type="monotone" dataKey="new" name="New Clients" stroke="hsl(285, 72%, 60%)" fill="hsl(285, 72%, 60%)" fillOpacity={0.1} strokeWidth={2} animationDuration={1800} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-heading">Priority Tasks</CardTitle>
              <Badge variant="outline" className="text-[10px]">{upcomingTasks.length} pending</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-border/40 hover:bg-accent/30 transition-all duration-200 group cursor-pointer">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    task.priority === 'urgent' ? 'bg-destructive animate-pulse' :
                    task.priority === 'high' ? 'bg-[hsl(40,90%,55%)]' : 'bg-[hsl(220,70%,55%)]'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{task.task}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[11px] text-muted-foreground">{task.due}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className={`text-[10px] shrink-0 ${
                    task.status === 'in-progress' ? 'border-primary/30 text-primary' : ''
                  }`}>
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;
