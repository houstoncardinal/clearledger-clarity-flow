import { useState } from 'react';
import {
  Workflow, Zap, Clock, CheckCircle, Play, Pause, Plus, Settings, ArrowRight, Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const workflows = [
  {
    id: 1, name: 'New Client Onboarding', description: 'Auto-send welcome email, create QuickBooks file, schedule kickoff',
    trigger: 'New client added', steps: 5, active: true, runs: 48, lastRun: '2 hours ago'
  },
  {
    id: 2, name: 'Invoice Overdue Reminder', description: 'Send email reminder when invoice is 7+ days overdue',
    trigger: 'Invoice overdue > 7 days', steps: 3, active: true, runs: 156, lastRun: '1 hour ago'
  },
  {
    id: 3, name: 'Monthly Reconciliation Alert', description: 'Notify team when monthly reconciliation is due',
    trigger: '1st of each month', steps: 2, active: true, runs: 12, lastRun: 'Mar 1, 2026'
  },
  {
    id: 4, name: 'Tax Deadline Countdown', description: 'Send reminders 30, 14, and 7 days before deadlines',
    trigger: 'Approaching deadline', steps: 4, active: true, runs: 89, lastRun: '3 days ago'
  },
  {
    id: 5, name: 'Payroll Pre-Processing', description: 'Gather timesheets, verify hours, prepare payroll batch',
    trigger: '2 days before payroll', steps: 6, active: false, runs: 24, lastRun: 'Mar 13, 2026'
  },
  {
    id: 6, name: 'Client Report Auto-Send', description: 'Generate and email monthly P&L to clients',
    trigger: '5th of each month', steps: 4, active: true, runs: 36, lastRun: 'Mar 5, 2026'
  },
];

const automationTemplates = [
  { name: 'Expense Categorization', desc: 'Auto-categorize transactions based on vendor rules', icon: Zap },
  { name: 'Client Health Score', desc: 'Calculate monthly engagement and revenue health', icon: CheckCircle },
  { name: 'Document Collection', desc: 'Request missing documents from clients automatically', icon: Bell },
  { name: 'Revenue Forecasting', desc: 'Project next month revenue based on active contracts', icon: Workflow },
];

const WorkflowAutomation = () => {
  const [workflowState, setWorkflowState] = useState(
    workflows.reduce((acc, w) => ({ ...acc, [w.id]: w.active }), {} as Record<number, boolean>)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground font-heading">Workflow Automation</h2>
          <p className="text-sm text-muted-foreground">Automate repetitive tasks and streamline operations</p>
        </div>
        <Button size="sm" className="rounded-xl bg-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />New Workflow</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Active Workflows', value: Object.values(workflowState).filter(Boolean).length.toString(), color: 'hsl(152, 70%, 45%)' },
          { label: 'Total Runs', value: '365', color: 'hsl(285, 72%, 60%)' },
          { label: 'Hours Saved', value: '~142', color: 'hsl(220, 70%, 55%)' },
          { label: 'Success Rate', value: '99.2%', color: 'hsl(40, 90%, 55%)' },
        ].map((s, i) => (
          <Card key={i} className="border-border/40">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-foreground font-heading">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Workflows */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-base font-heading">Workflows</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {workflows.map((w) => (
            <div key={w.id} className="flex items-center justify-between p-4 rounded-xl border border-border/40 hover:bg-accent/30 transition-all group">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${workflowState[w.id] ? 'bg-primary/10' : 'bg-muted'}`}>
                  <Workflow className={`w-5 h-5 ${workflowState[w.id] ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{w.name}</p>
                  <p className="text-xs text-muted-foreground">{w.description}</p>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" />{w.trigger}</span>
                    <span>•</span>
                    <span>{w.steps} steps</span>
                    <span>•</span>
                    <span>{w.runs} runs</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-muted-foreground hidden sm:block">{w.lastRun}</span>
                <Switch
                  checked={workflowState[w.id]}
                  onCheckedChange={(v) => setWorkflowState(prev => ({ ...prev, [w.id]: v }))}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Templates */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-base font-heading">Automation Templates</CardTitle>
          <CardDescription>Quick-start with pre-built automation workflows</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {automationTemplates.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border/40 hover:border-primary/30 hover:bg-accent/30 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowAutomation;
