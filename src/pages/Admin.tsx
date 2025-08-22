import { useState } from 'react';
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
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,567',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Clients',
      value: '47',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Pending Tasks',
      value: '23',
      change: '-5',
      trend: 'down',
      icon: FileText,
      color: 'text-orange-600'
    },
    {
      title: 'Completion Rate',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-purple-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      client: 'TechStart Inc.',
      action: 'Monthly reconciliation completed',
      time: '2 hours ago',
      status: 'completed',
      amount: '$12,450'
    },
    {
      id: 2,
      client: 'Green Solutions',
      action: 'Payroll processed',
      time: '4 hours ago',
      status: 'completed',
      amount: '$8,920'
    },
    {
      id: 3,
      client: 'Innovate Labs',
      action: 'Quarterly report generated',
      time: '6 hours ago',
      status: 'pending',
      amount: '$15,300'
    },
    {
      id: 4,
      client: 'Global Retail',
      action: 'Tax filing submitted',
      time: '1 day ago',
      status: 'completed',
      amount: '$22,100'
    },
    {
      id: 5,
      client: 'Digital Agency',
      action: 'New client onboarding',
      time: '1 day ago',
      status: 'in-progress',
      amount: '$5,800'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Monthly reconciliation for TechCorp',
      dueDate: 'Today',
      priority: 'high',
      client: 'TechCorp Solutions'
    },
    {
      id: 2,
      title: 'Payroll processing for Innovate Labs',
      dueDate: 'Tomorrow',
      priority: 'medium',
      client: 'Innovate Labs'
    },
    {
      id: 3,
      title: 'Quarterly review for Global Retail',
      dueDate: 'Dec 15',
      priority: 'low',
      client: 'Global Retail'
    },
    {
      id: 4,
      title: 'Tax preparation for Digital Agency',
      dueDate: 'Dec 18',
      priority: 'high',
      client: 'Digital Agency'
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'TechStart Inc.',
      email: 'contact@techstart.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      plan: 'Professional',
      monthlyRevenue: '$12,450',
      lastActivity: '2 hours ago',
      tasks: 3
    },
    {
      id: 2,
      name: 'Green Solutions',
      email: 'info@greensolutions.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      plan: 'Enterprise',
      monthlyRevenue: '$8,920',
      lastActivity: '4 hours ago',
      tasks: 1
    },
    {
      id: 3,
      name: 'Innovate Labs',
      email: 'hello@innovatelabs.com',
      phone: '+1 (555) 345-6789',
      status: 'pending',
      plan: 'Essentials',
      monthlyRevenue: '$15,300',
      lastActivity: '6 hours ago',
      tasks: 2
    },
    {
      id: 4,
      name: 'Global Retail',
      email: 'finance@globalretail.com',
      phone: '+1 (555) 456-7890',
      status: 'active',
      plan: 'Professional',
      monthlyRevenue: '$22,100',
      lastActivity: '1 day ago',
      tasks: 0
    },
    {
      id: 5,
      name: 'Digital Agency',
      email: 'admin@digitalagency.com',
      phone: '+1 (555) 567-8901',
      status: 'onboarding',
      plan: 'Essentials',
      monthlyRevenue: '$5,800',
      lastActivity: '1 day ago',
      tasks: 4
    }
  ];

  const reports = [
    {
      id: 1,
      name: 'Monthly Revenue Report',
      type: 'Financial',
      lastGenerated: 'Dec 1, 2024',
      status: 'ready',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Client Activity Summary',
      type: 'Analytics',
      lastGenerated: 'Nov 30, 2024',
      status: 'ready',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'Task Completion Report',
      type: 'Operations',
      lastGenerated: 'Nov 29, 2024',
      status: 'processing',
      size: '3.1 MB'
    },
    {
      id: 4,
      name: 'Tax Filing Status',
      type: 'Compliance',
      lastGenerated: 'Nov 28, 2024',
      status: 'ready',
      size: '1.2 MB'
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
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Enterprise': return 'bg-purple-100 text-purple-800';
      case 'Professional': return 'bg-blue-100 text-blue-800';
      case 'Essentials': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
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
                  placeholder="Search clients, tasks..."
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
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
          <div className="flex space-x-8">
            {['overview', 'clients', 'tasks', 'reports', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
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
                        <span className="text-sm text-muted-foreground ml-1">vs last month</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activities */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Activities</CardTitle>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{activity.client}</p>
                              <p className="text-sm text-muted-foreground">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(activity.status)}>
                              {activity.status}
                            </Badge>
                            <p className="text-sm font-medium text-foreground mt-1">
                              {activity.amount}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Tasks */}
              <div>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Upcoming Tasks</CardTitle>
                      <Button size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task) => (
                        <div key={task.id} className="p-4 border border-border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-foreground text-sm">
                              {task.title}
                            </h4>
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            {task.client}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{task.dueDate}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Client Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Client
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Clients</CardTitle>
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
                  {clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{client.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {client.email}
                            </span>
                            <span className="flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {client.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium text-foreground">{client.monthlyRevenue}</p>
                          <p className="text-xs text-muted-foreground">{client.lastActivity}</p>
                        </div>
                        <Badge className={getStatusColor(client.status)}>
                          {client.status}
                        </Badge>
                        <Badge className={getPlanColor(client.plan)}>
                          {client.plan}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
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

        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Task Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Task
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    High Priority
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingTasks.filter(task => task.priority === 'high').map((task) => (
                      <div key={task.id} className="p-3 border border-border rounded-lg">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-muted-foreground">{task.client}</p>
                        <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    Medium Priority
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingTasks.filter(task => task.priority === 'medium').map((task) => (
                      <div key={task.id} className="p-3 border border-border rounded-lg">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-muted-foreground">{task.client}</p>
                        <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Low Priority
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingTasks.filter(task => task.priority === 'low').map((task) => (
                      <div key={task.id} className="p-3 border border-border rounded-lg">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-muted-foreground">{task.client}</p>
                        <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

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
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{report.name}</h4>
                          <p className="text-sm text-muted-foreground">{report.type} • {report.size}</p>
                          <p className="text-xs text-muted-foreground">Last generated: {report.lastGenerated}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
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
                      defaultValue="admin@clearledger.com"
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
    </div>
  );
};

export default Admin; 