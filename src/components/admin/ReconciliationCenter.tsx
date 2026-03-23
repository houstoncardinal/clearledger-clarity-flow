import {
  ClipboardCheck, CheckCircle, AlertCircle, Clock, RefreshCw, Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const accounts = [
  { name: 'Business Checking — Chase', lastReconciled: 'Mar 15, 2026', balance: 124500, status: 'reconciled', discrepancy: 0 },
  { name: 'Business Savings — Chase', lastReconciled: 'Mar 15, 2026', balance: 85200, status: 'reconciled', discrepancy: 0 },
  { name: 'Payroll Account — Wells Fargo', lastReconciled: 'Mar 10, 2026', balance: 42300, status: 'needs-review', discrepancy: 345.67 },
  { name: 'Operating — Bank of America', lastReconciled: 'Feb 28, 2026', balance: 67800, status: 'overdue', discrepancy: 1250.00 },
  { name: 'Credit Card — Amex Business', lastReconciled: 'Mar 12, 2026', balance: -8900, status: 'reconciled', discrepancy: 0 },
];

const recentTransactions = [
  { date: 'Mar 22', desc: 'Client Payment — TechStart Inc.', amount: 12500, type: 'credit', matched: true },
  { date: 'Mar 21', desc: 'QuickBooks Subscription', amount: -89.99, type: 'debit', matched: true },
  { date: 'Mar 21', desc: 'Office Supplies — Staples', amount: -234.50, type: 'debit', matched: false },
  { date: 'Mar 20', desc: 'Client Payment — Green Solutions', amount: 8900, type: 'credit', matched: true },
  { date: 'Mar 20', desc: 'Unknown Transfer', amount: -345.67, type: 'debit', matched: false },
  { date: 'Mar 19', desc: 'Payroll Processing Fee', amount: -125.00, type: 'debit', matched: true },
];

const ReconciliationCenter = () => {
  const reconciled = accounts.filter(a => a.status === 'reconciled').length;
  const total = accounts.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground font-heading">Reconciliation Center</h2>
          <p className="text-sm text-muted-foreground">Match bank statements, resolve discrepancies, and maintain accuracy</p>
        </div>
        <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><RefreshCw className="w-4 h-4 mr-2" />Sync All</Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Accounts Reconciled', value: `${reconciled}/${total}`, icon: CheckCircle, color: 'hsl(152, 70%, 45%)' },
          { label: 'Unmatched Items', value: '2', icon: AlertCircle, color: 'hsl(40, 90%, 55%)' },
          { label: 'Total Discrepancy', value: '$1,595.67', icon: ClipboardCheck, color: 'hsl(0, 70%, 55%)' },
          { label: 'Last Full Reconciliation', value: 'Mar 15', icon: Clock, color: 'hsl(220, 70%, 55%)' },
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

      {/* Accounts */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-base font-heading">Bank Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {accounts.map((a, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border/40 hover:bg-accent/30 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  a.status === 'reconciled' ? 'bg-[hsl(152,70%,45%)]' :
                  a.status === 'needs-review' ? 'bg-[hsl(40,90%,55%)]' :
                  'bg-destructive animate-pulse'
                }`} />
                <div>
                  <p className="text-sm font-medium text-foreground">{a.name}</p>
                  <p className="text-xs text-muted-foreground">Last reconciled: {a.lastReconciled}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={`text-sm font-bold ${a.balance < 0 ? 'text-destructive' : 'text-foreground'}`}>
                    ${Math.abs(a.balance).toLocaleString()}
                  </p>
                  {a.discrepancy > 0 && (
                    <p className="text-[11px] text-destructive">-${a.discrepancy.toFixed(2)} discrepancy</p>
                  )}
                </div>
                <Badge variant="outline" className={`text-[10px] ${
                  a.status === 'reconciled' ? 'border-[hsl(152,70%,45%)]/30 text-[hsl(152,70%,45%)]' :
                  a.status === 'needs-review' ? 'border-[hsl(40,90%,55%)]/30 text-[hsl(40,90%,55%)]' :
                  'border-destructive/30 text-destructive'
                }`}>
                  {a.status.replace('-', ' ')}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Unmatched Transactions */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-base font-heading">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Date</th>
                  <th className="text-left text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Description</th>
                  <th className="text-right text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Amount</th>
                  <th className="text-center text-[11px] font-semibold text-muted-foreground p-4 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((t, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-accent/30 transition-colors">
                    <td className="p-4 text-sm text-muted-foreground">{t.date}</td>
                    <td className="p-4 text-sm font-medium">{t.desc}</td>
                    <td className={`p-4 text-right text-sm font-bold ${t.amount > 0 ? 'text-[hsl(152,70%,45%)]' : 'text-foreground'}`}>
                      {t.amount > 0 ? '+' : ''}{t.amount < 0 ? '-' : ''}${Math.abs(t.amount).toLocaleString()}
                    </td>
                    <td className="p-4 text-center">
                      {t.matched ? (
                        <Badge className="text-[10px] bg-[hsl(152,70%,45%)]/10 text-[hsl(152,70%,45%)]">Matched</Badge>
                      ) : (
                        <Badge className="text-[10px] bg-[hsl(40,90%,55%)]/10 text-[hsl(40,90%,55%)]">Unmatched</Badge>
                      )}
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

export default ReconciliationCenter;
