import { useState } from 'react';
import {
  LayoutDashboard, Users, BookOpen, Receipt, FileBarChart, Cog, LogOut,
  ChevronLeft, ChevronRight, Calendar, Share2, PieChart, MousePointerClick,
  Calculator, BriefcaseBusiness, ClipboardCheck, Workflow, FileSpreadsheet,
  Banknote, Scale, Bell, BarChart3, TrendingUp
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: any;
  badge?: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: 'Command Center',
    items: [
      { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'website-tracking', label: 'Website & SEO', icon: MousePointerClick },
      { id: 'analytics', label: 'Analytics Hub', icon: BarChart3 },
    ],
  },
  {
    label: 'Client Operations',
    items: [
      { id: 'clients', label: 'Client Management', icon: Users },
      { id: 'bookkeeping', label: 'Bookkeeping', icon: BookOpen },
      { id: 'tax-center', label: 'Tax Center', icon: Scale },
      { id: 'payroll', label: 'Payroll Manager', icon: Banknote },
    ],
  },
  {
    label: 'Financial Tools',
    items: [
      { id: 'invoices', label: 'Invoicing', icon: Receipt, badge: '3' },
      { id: 'profit-loss', label: 'Profit & Loss', icon: TrendingUp },
      { id: 'reports', label: 'Report Builder', icon: FileBarChart },
      { id: 'reconciliation', label: 'Reconciliation', icon: ClipboardCheck },
    ],
  },
  {
    label: 'Marketing',
    items: [
      { id: 'content-calendar', label: 'Content Calendar', icon: Calendar },
      { id: 'social-media', label: 'Social Media', icon: Share2 },
    ],
  },
  {
    label: 'Automation & System',
    items: [
      { id: 'workflows', label: 'Workflows', icon: Workflow },
      { id: 'settings', label: 'Settings', icon: Cog },
    ],
  },
];

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab, collapsed, setCollapsed }: AdminSidebarProps) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 flex flex-col border-r border-border/50 bg-card/95 backdrop-blur-2xl transition-all duration-300 ease-out ${
        collapsed ? 'w-[72px]' : 'w-[270px]'
      }`}
    >
      {/* Logo */}
      <div className="h-[72px] flex items-center px-4 border-b border-border/50 gap-3 shrink-0">
        <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden shadow-lg shadow-primary/20 ring-2 ring-primary/10">
          <img src="/logo.png" alt="ClearLedger" className="w-full h-full object-cover" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="font-heading text-sm font-bold text-foreground leading-tight truncate tracking-tight">ClearLedger</p>
            <p className="text-[10px] text-muted-foreground leading-tight font-medium">Command Center</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5 scrollbar-thin">
        {navSections.map((section) => (
          <div key={section.label}>
            {!collapsed && (
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 px-3 mb-2">
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
                    title={collapsed ? item.label : undefined}
                    className={`
                      w-full flex items-center gap-3 rounded-xl text-[13px] font-medium transition-all duration-200 relative
                      ${collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2.5'}
                      ${isActive
                        ? 'bg-primary/10 text-primary shadow-sm shadow-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                      }
                    `}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary" />
                    )}
                    <Icon className={`w-[18px] h-[18px] shrink-0 ${isActive ? 'text-primary' : ''}`} />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                    {item.badge && !collapsed && (
                      <span className="ml-auto text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-border/50 p-3 space-y-1 shrink-0">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-full flex items-center gap-3 rounded-xl text-[13px] text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors ${
            collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2.5'
          }`}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          {!collapsed && <span>Collapse</span>}
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className={`w-full flex items-center gap-3 rounded-xl text-[13px] text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors ${
            collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2.5'
          }`}
        >
          <LogOut className="w-4 h-4" />
          {!collapsed && <span>Exit to Site</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
