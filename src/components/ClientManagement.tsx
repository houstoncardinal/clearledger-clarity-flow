import { useState } from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Edit, 
  Eye, 
  MoreHorizontal, 
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Star,
  TrendingUp,
  TrendingDown,
  UserPlus,
  Building,
  CreditCard,
  Receipt,
  Activity,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending' | 'onboarding';
  plan: 'Essentials' | 'Professional' | 'Enterprise';
  monthlyRevenue: number;
  lastActivity: string;
  tasks: number;
  joinDate: string;
  industry: string;
  location: string;
  contactPerson: string;
  website?: string;
  notes?: string;
}

const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const clients: Client[] = [
    {
      id: 1,
      name: 'TechStart Inc.',
      email: 'contact@techstart.com',
      phone: '+1 (555) 123-4567',
      company: 'TechStart Inc.',
      status: 'active',
      plan: 'Professional',
      monthlyRevenue: 12450,
      lastActivity: '2 hours ago',
      tasks: 3,
      joinDate: '2024-01-15',
      industry: 'SaaS',
      location: 'San Francisco, CA',
      contactPerson: 'Sarah Chen',
      website: 'https://techstart.com',
      notes: 'Fast-growing SaaS company, excellent communication'
    },
    {
      id: 2,
      name: 'Green Solutions',
      email: 'info@greensolutions.com',
      phone: '+1 (555) 234-5678',
      company: 'Green Solutions LLC',
      status: 'active',
      plan: 'Enterprise',
      monthlyRevenue: 8920,
      lastActivity: '4 hours ago',
      tasks: 1,
      joinDate: '2023-11-20',
      industry: 'Construction',
      location: 'Austin, TX',
      contactPerson: 'Michael Rodriguez',
      website: 'https://greensolutions.com',
      notes: 'Sustainable construction company, very organized'
    },
    {
      id: 3,
      name: 'Innovate Labs',
      email: 'hello@innovatelabs.com',
      phone: '+1 (555) 345-6789',
      company: 'Innovate Labs',
      status: 'pending',
      plan: 'Essentials',
      monthlyRevenue: 15300,
      lastActivity: '6 hours ago',
      tasks: 2,
      joinDate: '2024-02-10',
      industry: 'Healthcare',
      location: 'Boston, MA',
      contactPerson: 'Lisa Thompson',
      website: 'https://innovatelabs.com',
      notes: 'Healthcare startup, needs guidance on compliance'
    },
    {
      id: 4,
      name: 'Global Retail',
      email: 'finance@globalretail.com',
      phone: '+1 (555) 456-7890',
      company: 'Global Retail Corp',
      status: 'active',
      plan: 'Professional',
      monthlyRevenue: 22100,
      lastActivity: '1 day ago',
      tasks: 0,
      joinDate: '2023-08-05',
      industry: 'Retail',
      location: 'New York, NY',
      contactPerson: 'David Wilson',
      website: 'https://globalretail.com',
      notes: 'Established retail chain, very professional'
    },
    {
      id: 5,
      name: 'Digital Agency',
      email: 'admin@digitalagency.com',
      phone: '+1 (555) 567-8901',
      company: 'Digital Agency Pro',
      status: 'onboarding',
      plan: 'Essentials',
      monthlyRevenue: 5800,
      lastActivity: '1 day ago',
      tasks: 4,
      joinDate: '2024-03-01',
      industry: 'Marketing',
      location: 'Los Angeles, CA',
      contactPerson: 'Emma Davis',
      website: 'https://digitalagency.com',
      notes: 'Creative agency, needs help with QuickBooks setup'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'onboarding': return 'bg-purple-100 text-purple-800';
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

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    const matchesPlan = planFilter === 'all' || client.plan === planFilter;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const stats = [
    {
      title: 'Total Clients',
      value: clients.length,
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Clients',
      value: clients.filter(c => c.status === 'active').length,
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Monthly Revenue',
      value: `$${clients.reduce((sum, c) => sum + c.monthlyRevenue, 0).toLocaleString()}`,
      change: '+15.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Pending Tasks',
      value: clients.reduce((sum, c) => sum + c.tasks, 0),
      change: '-3',
      trend: 'down',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Client Management</h2>
          <p className="text-muted-foreground">Manage your client relationships and track their progress</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Client
        </Button>
      </div>

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
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
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

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search clients by name, email, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex space-x-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="onboarding">Onboarding</option>
              </select>
              <select
                value={planFilter}
                onChange={(e) => setPlanFilter(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Plans</option>
                <option value="Essentials">Essentials</option>
                <option value="Professional">Professional</option>
                <option value="Enterprise">Enterprise</option>
              </select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Clients ({filteredClients.length})</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClients.map((client) => (
              <div key={client.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
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
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {client.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getStatusColor(client.status)}>
                        {client.status}
                      </Badge>
                      <Badge className={getPlanColor(client.plan)}>
                        {client.plan}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {client.industry}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium text-foreground">${client.monthlyRevenue.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{client.lastActivity}</p>
                    <p className="text-xs text-muted-foreground">{client.tasks} tasks</p>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => setSelectedClient(client)}>
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

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Client Details</h2>
                <Button variant="ghost" size="sm" onClick={() => setSelectedClient(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Company Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {selectedClient.name}</p>
                    <p><span className="font-medium">Industry:</span> {selectedClient.industry}</p>
                    <p><span className="font-medium">Location:</span> {selectedClient.location}</p>
                    <p><span className="font-medium">Website:</span> {selectedClient.website || 'N/A'}</p>
                    <p><span className="font-medium">Join Date:</span> {selectedClient.joinDate}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Contact Person:</span> {selectedClient.contactPerson}</p>
                    <p><span className="font-medium">Email:</span> {selectedClient.email}</p>
                    <p><span className="font-medium">Phone:</span> {selectedClient.phone}</p>
                    <p><span className="font-medium">Status:</span> 
                      <Badge className={`ml-2 ${getStatusColor(selectedClient.status)}`}>
                        {selectedClient.status}
                      </Badge>
                    </p>
                    <p><span className="font-medium">Plan:</span> 
                      <Badge className={`ml-2 ${getPlanColor(selectedClient.plan)}`}>
                        {selectedClient.plan}
                      </Badge>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Financial Information</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">${selectedClient.monthlyRevenue.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{selectedClient.tasks}</p>
                      <p className="text-sm text-muted-foreground">Active Tasks</p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{selectedClient.lastActivity}</p>
                      <p className="text-sm text-muted-foreground">Last Activity</p>
                    </div>
                  </Card>
                </div>
              </div>

              {selectedClient.notes && (
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Notes</h3>
                  <p className="text-sm text-muted-foreground bg-accent/50 p-3 rounded-lg">
                    {selectedClient.notes}
                  </p>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-6 border-t border-border">
                <Button variant="outline" onClick={() => setSelectedClient(null)}>
                  Close
                </Button>
                <Button>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Client
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientManagement; 