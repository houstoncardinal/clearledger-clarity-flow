import {
  Banknote, Users, Calendar, Clock, AlertCircle, CheckCircle, Plus, Download, TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const payrollData = [
  { month: 'Jan', gross: 185000, net: 142000, taxes: 43000 },
  { month: 'Feb', gross: 192000, net: 147000, taxes: 45000 },
  { month: 'Mar', gross: 198000, net: 152000, taxes: 46000 },
  { month: 'Apr', gross: 205000, net: 158000, taxes: 47000 },
  { month: 'May', gross: 210000, net: 161000, taxes: 49000 },
  { month: 'Jun', gross: 215000, net: 165000, taxes: 50000 },
];

const upcomingPayrolls = [
  { client: 'TechStart Inc.', employees: 24, nextRun: 'Mar 25, 2026', frequency: 'Bi-Weekly', amount: 48000, status: 'scheduled' },
  { client: 'Green Solutions', employees: 12, nextRun: 'Mar 28, 2026', frequency: 'Semi-Monthly', amount: 28000, status: 'pending-review' },
  { client: 'Global Retail', employees: 45, nextRun: 'Mar 31, 2026', frequency: 'Monthly', amount: 92000, status: 'scheduled' },
  { client: 'Innovate Labs', employees: 8, nextRun: 'Apr 1, 2026', frequency: 'Bi-Weekly', amount: 18500, status: 'needs-setup' },
];

const PayrollManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground font-heading">Payroll Manager</h2>
          <p className="text-sm text-muted-foreground">Track payroll runs, taxes, and employee payments</p>
        </div>
        <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />Run Payroll</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Employees', value: '89', icon: Users, color: 'hsl(220, 70%, 55%)' },
          { label: 'Monthly Payroll', value: '$215K', icon: Banknote, color: 'hsl(285, 72%, 60%)' },
          { label: 'Next Run', value: 'Mar 25', icon: Calendar, color: 'hsl(152, 70%, 45%)' },
          { label: 'Tax Deposits Due', value: '$50K', icon: AlertCircle, color: 'hsl(40, 90%, 55%)' },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <Card key={i} className="border-border/40">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${s.color}15` }}>
                    <Icon className="w-4 h-4" style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-lg font-bold text-foreground">{s.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Chart */}
      <Card className="border-border/40">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-heading">Payroll Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={payrollData}>
              <defs>
                <linearGradient id="grossGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(285, 72%, 60%)" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(285, 72%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
              <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip />
              <Area type="monotone" dataKey="gross" name="Gross Pay" stroke="hsl(285, 72%, 60%)" fill="url(#grossGrad)" strokeWidth={2.5} animationDuration={1500} />
              <Area type="monotone" dataKey="net" name="Net Pay" stroke="hsl(152, 70%, 45%)" fill="hsl(152, 70%, 45%)" fillOpacity={0.1} strokeWidth={2} animationDuration={1800} />
              <Area type="monotone" dataKey="taxes" name="Tax Withholding" stroke="hsl(0, 70%, 55%)" fill="hsl(0, 70%, 55%)" fillOpacity={0.05} strokeWidth={1.5} animationDuration={2000} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Upcoming Payrolls */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-base font-heading">Upcoming Payroll Runs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingPayrolls.map((p, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border/40 hover:bg-accent/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{p.client}</p>
                  <p className="text-xs text-muted-foreground">{p.employees} employees • {p.frequency}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">${p.amount.toLocaleString()}</p>
                  <p className="text-[11px] text-muted-foreground">{p.nextRun}</p>
                </div>
                <Badge variant="outline" className={`text-[10px] ${
                  p.status === 'scheduled' ? 'border-[hsl(152,70%,45%)]/30 text-[hsl(152,70%,45%)]' :
                  p.status === 'needs-setup' ? 'border-destructive/30 text-destructive' :
                  'border-[hsl(40,90%,55%)]/30 text-[hsl(40,90%,55%)]'
                }`}>
                  {p.status.replace('-', ' ')}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PayrollManager;
