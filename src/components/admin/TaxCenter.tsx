import {
  Scale, Calendar, AlertCircle, CheckCircle, Clock, FileText, Download,
  ArrowUpRight, Users, DollarSign, Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const taxDeadlines = [
  { name: 'Q1 Estimated Tax', date: 'Apr 15, 2026', status: 'upcoming', clients: 42, completed: 28 },
  { name: 'Form 941 — Q1', date: 'Apr 30, 2026', status: 'upcoming', clients: 35, completed: 12 },
  { name: 'Texas Franchise Tax', date: 'May 15, 2026', status: 'upcoming', clients: 48, completed: 5 },
  { name: 'Q2 Estimated Tax', date: 'Jun 15, 2026', status: 'future', clients: 42, completed: 0 },
];

const taxFilingData = [
  { month: 'Jan', filed: 15, pending: 3 },
  { month: 'Feb', filed: 22, pending: 5 },
  { month: 'Mar', filed: 45, pending: 12 },
  { month: 'Apr', filed: 38, pending: 8 },
  { month: 'May', filed: 12, pending: 2 },
  { month: 'Jun', filed: 8, pending: 1 },
];

const clientTaxStatus = [
  { client: 'TechStart Inc.', type: 'S-Corp', lastFiled: 'Feb 15, 2026', status: 'current', balance: 0 },
  { client: 'Green Solutions', type: 'LLC', lastFiled: 'Mar 1, 2026', status: 'current', balance: 0 },
  { client: 'Innovate Labs', type: 'C-Corp', lastFiled: 'Jan 20, 2026', status: 'needs-attention', balance: 4500 },
  { client: 'Global Retail', type: 'S-Corp', lastFiled: 'Mar 10, 2026', status: 'current', balance: 0 },
  { client: 'Digital Agency', type: 'LLC', lastFiled: 'Feb 28, 2026', status: 'extension-filed', balance: 2200 },
];

const TaxCenter = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground font-heading">Tax Center</h2>
          <p className="text-sm text-muted-foreground">Manage deadlines, filings, and client tax obligations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-xl"><Download className="w-4 h-4 mr-2" />Export</Button>
          <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />New Filing</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Upcoming Deadlines', value: '4', icon: Calendar, color: 'hsl(285, 72%, 60%)' },
          { label: 'Filings This Month', value: '45', icon: FileText, color: 'hsl(220, 70%, 55%)' },
          { label: 'Clients Needing Attention', value: '2', icon: AlertCircle, color: 'hsl(40, 90%, 55%)' },
          { label: 'On-Time Rate', value: '97.3%', icon: CheckCircle, color: 'hsl(152, 70%, 45%)' },
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

      {/* Deadlines + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/40">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-heading">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {taxDeadlines.map((d, i) => (
              <div key={i} className="p-3 rounded-xl border border-border/40 hover:bg-accent/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{d.name}</span>
                  </div>
                  <Badge variant="outline" className={`text-[10px] ${d.status === 'upcoming' ? 'border-[hsl(40,90%,55%)]/30 text-[hsl(40,90%,55%)]' : ''}`}>
                    {d.date}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                  <span>{d.completed} of {d.clients} clients completed</span>
                  <span className="font-semibold">{Math.round(d.completed / d.clients * 100)}%</span>
                </div>
                <Progress value={d.completed / d.clients * 100} className="h-1.5" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-heading">Filing Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={taxFilingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 8%, 88%)" strokeOpacity={0.5} />
                <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="filed" name="Filed" fill="hsl(285, 72%, 60%)" radius={[4, 4, 0, 0]} animationDuration={1200} />
                <Bar dataKey="pending" name="Pending" fill="hsl(40, 90%, 55%)" radius={[4, 4, 0, 0]} animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Client Tax Status */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-base font-heading">Client Tax Status</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Client</th>
                  <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Entity Type</th>
                  <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Last Filed</th>
                  <th className="text-center text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Status</th>
                  <th className="text-right text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Balance Due</th>
                </tr>
              </thead>
              <tbody>
                {clientTaxStatus.map((c, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-accent/30 transition-colors">
                    <td className="p-4 text-sm font-medium">{c.client}</td>
                    <td className="p-4 text-sm text-muted-foreground">{c.type}</td>
                    <td className="p-4 text-sm text-muted-foreground">{c.lastFiled}</td>
                    <td className="p-4 text-center">
                      <Badge className={`text-[10px] ${
                        c.status === 'current' ? 'bg-[hsl(152,70%,45%)]/10 text-[hsl(152,70%,45%)]' :
                        c.status === 'needs-attention' ? 'bg-destructive/10 text-destructive' :
                        'bg-[hsl(220,70%,55%)]/10 text-[hsl(220,70%,55%)]'
                      }`}>
                        {c.status.replace('-', ' ')}
                      </Badge>
                    </td>
                    <td className="p-4 text-right text-sm font-semibold">
                      {c.balance > 0 ? `$${c.balance.toLocaleString()}` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxCenter;
