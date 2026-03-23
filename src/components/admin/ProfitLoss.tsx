import { TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const plData = [
  { category: 'Bookkeeping', revenue: 32000, cogs: 8000 },
  { category: 'Tax Services', revenue: 28000, cogs: 6500 },
  { category: 'Payroll', revenue: 15000, cogs: 4200 },
  { category: 'QuickBooks', revenue: 12000, cogs: 2800 },
  { category: 'Advisory', revenue: 8000, cogs: 1500 },
];

const monthlyPL = [
  { month: 'Jan', income: 45000, expenses: 32000 },
  { month: 'Feb', income: 52000, expenses: 35000 },
  { month: 'Mar', income: 48000, expenses: 33000 },
  { month: 'Apr', income: 61000, expenses: 38000 },
  { month: 'May', income: 55000, expenses: 36000 },
  { month: 'Jun', income: 67000, expenses: 42000 },
];

const expenseBreakdown = [
  { name: 'Staff Salaries', amount: 28000, pct: 52 },
  { name: 'Software & Tools', amount: 8500, pct: 16 },
  { name: 'Office & Rent', amount: 6200, pct: 12 },
  { name: 'Marketing', amount: 4800, pct: 9 },
  { name: 'Insurance', amount: 3200, pct: 6 },
  { name: 'Other', amount: 2800, pct: 5 },
];

const ProfitLoss = () => {
  const totalRevenue = 89000;
  const totalExpenses = 55000;
  const netProfit = totalRevenue - totalExpenses;
  const margin = ((netProfit / totalRevenue) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground font-heading">Profit & Loss</h2>
          <p className="text-sm text-muted-foreground">Financial performance overview — March 2026</p>
        </div>
        <Badge variant="outline" className="text-xs font-mono">Live</Badge>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-border/40 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[hsl(152,70%,45%)]" />
          <CardContent className="p-5">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Total Revenue</p>
            <p className="text-3xl font-bold text-foreground mt-1 font-heading">${totalRevenue.toLocaleString()}</p>
            <div className="flex items-center mt-2 text-xs">
              <ArrowUpRight className="w-3.5 h-3.5 mr-1" style={{ color: 'hsl(152, 70%, 45%)' }} />
              <span className="font-semibold" style={{ color: 'hsl(152, 70%, 45%)' }}>+12.5%</span>
              <span className="text-muted-foreground ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/40 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-destructive" />
          <CardContent className="p-5">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Total Expenses</p>
            <p className="text-3xl font-bold text-foreground mt-1 font-heading">${totalExpenses.toLocaleString()}</p>
            <div className="flex items-center mt-2 text-xs">
              <ArrowUpRight className="w-3.5 h-3.5 mr-1" style={{ color: 'hsl(40, 90%, 55%)' }} />
              <span className="font-semibold" style={{ color: 'hsl(40, 90%, 55%)' }}>+5.8%</span>
              <span className="text-muted-foreground ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/40 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          <CardContent className="p-5">
            <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Net Profit</p>
            <p className="text-3xl font-bold text-foreground mt-1 font-heading">${netProfit.toLocaleString()}</p>
            <div className="flex items-center mt-2 text-xs">
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-primary" />
              <span className="font-semibold text-primary">{margin}% margin</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading">Revenue by Service</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={plData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                <XAxis type="number" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <YAxis type="category" dataKey="category" fontSize={11} tickLine={false} axisLine={false} width={90} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="revenue" name="Revenue" fill="hsl(285, 72%, 60%)" radius={[0, 4, 4, 0]} animationDuration={1200} />
                <Bar dataKey="cogs" name="Cost" fill="hsl(0, 70%, 55%)" opacity={0.4} radius={[0, 4, 4, 0]} animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-heading">Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {expenseBreakdown.map((e, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{e.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">${e.amount.toLocaleString()}</span>
                    <span className="text-[11px] text-muted-foreground w-8 text-right">{e.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${e.pct}%`,
                      background: `hsl(285, ${40 + i * 6}%, ${60 - i * 4}%)`
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trend */}
      <Card className="border-border/40">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-heading">Monthly Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyPL}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
              <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Bar dataKey="income" name="Income" fill="hsl(152, 70%, 45%)" radius={[4, 4, 0, 0]} animationDuration={1200} />
              <Bar dataKey="expenses" name="Expenses" fill="hsl(0, 70%, 55%)" opacity={0.5} radius={[4, 4, 0, 0]} animationDuration={1500} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfitLoss;
