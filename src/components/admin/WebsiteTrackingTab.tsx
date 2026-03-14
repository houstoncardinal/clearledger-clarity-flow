import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Phone,
  Sparkles,
  Calendar,
  FileText,
  ExternalLink,
  TrendingUp,
  Eye,
  MousePointerClick,
  BarChart3,
  Globe,
  BookOpen,
  Megaphone,
  RefreshCw,
  Trash2,
  ArrowUpRight,
  Clock,
  MapPin,
  Monitor,
  Smartphone
} from 'lucide-react';
import {
  getCTATotals,
  getCTADailySummaries,
  getRecentCTAClicks,
  clearCTAClicks,
  type CTAClickEvent
} from '@/utils/ctaTracking';
import { blogPosts } from '@/data/blogPosts';
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const WebsiteTrackingTab = () => {
  const [totals, setTotals] = useState(getCTATotals());
  const [dailyData, setDailyData] = useState(getCTADailySummaries(30));
  const [recentClicks, setRecentClicks] = useState(getRecentCTAClicks(30));
  const [activeSection, setActiveSection] = useState<'cta' | 'google-ads' | 'google-analytics' | 'blog' | 'seo'>('cta');

  const refreshData = () => {
    setTotals(getCTATotals());
    setDailyData(getCTADailySummaries(30));
    setRecentClicks(getRecentCTAClicks(30));
  };

  useEffect(() => {
    const interval = setInterval(refreshData, 10000);
    return () => clearInterval(interval);
  }, []);

  const ctaTypeConfig: Record<string, { label: string; icon: any; color: string; bgColor: string }> = {
    phone_call: { label: 'Phone Calls', icon: Phone, color: 'text-green-600', bgColor: 'bg-green-500/10' },
    book_consultation: { label: 'Book Consultation', icon: Sparkles, color: 'text-blue-600', bgColor: 'bg-blue-500/10' },
    calendly_book: { label: 'Calendly Bookings', icon: Calendar, color: 'text-purple-600', bgColor: 'bg-purple-500/10' },
    contact_form: { label: 'Contact Form', icon: FileText, color: 'text-orange-600', bgColor: 'bg-orange-500/10' },
  };

  const formatTime = (timestamp: string) => {
    const d = new Date(timestamp);
    return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const sections = [
    { id: 'cta' as const, label: 'CTA Tracking', icon: MousePointerClick },
    { id: 'google-ads' as const, label: 'Google Ads', icon: Megaphone },
    { id: 'google-analytics' as const, label: 'Google Analytics', icon: BarChart3 },
    { id: 'blog' as const, label: 'Blog Manager', icon: BookOpen },
    { id: 'seo' as const, label: 'SEO & Site Health', icon: Globe },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Website & Marketing Command Center</h2>
          <p className="text-muted-foreground mt-1">Track every click, ad, and piece of content in real time</p>
        </div>
        <Button variant="outline" size="sm" onClick={refreshData}>
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Data
        </Button>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.id}
              variant={activeSection === section.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveSection(section.id)}
              className="gap-2"
            >
              <Icon className="w-4 h-4" />
              {section.label}
            </Button>
          );
        })}
      </div>

      {/* ========== CTA TRACKING ========== */}
      {activeSection === 'cta' && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(ctaTypeConfig).map(([type, config]) => {
              const Icon = config.icon;
              return (
                <Card key={type} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 ${config.bgColor} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${config.color}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Today: {totals.today[type as keyof typeof totals.today]}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground">{config.label}</h3>
                    <div className="flex items-end gap-3 mt-1">
                      <span className="text-3xl font-bold text-foreground">
                        {totals.thisMonth[type as keyof typeof totals.thisMonth]}
                      </span>
                      <span className="text-xs text-muted-foreground mb-1">this month</span>
                    </div>
                    <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                      <span>Week: {totals.thisWeek[type as keyof typeof totals.thisWeek]}</span>
                      <span>All: {totals.allTime[type as keyof typeof totals.allTime]}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Total CTA Clicks Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>CTA Clicks — Last 30 Days</CardTitle>
                  <CardDescription>Every phone call, consultation booking, and engagement tracked</CardDescription>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span>Phone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span>Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span>Calendly</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="date" tickFormatter={(d) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} fontSize={12} />
                  <YAxis allowDecimals={false} fontSize={12} />
                  <Tooltip labelFormatter={(d) => new Date(d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} />
                  <Area type="monotone" dataKey="phone_call" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.4} name="Phone Calls" />
                  <Area type="monotone" dataKey="book_consultation" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} name="Consultations" />
                  <Area type="monotone" dataKey="calendly_book" stackId="1" stroke="#a855f7" fill="#a855f7" fillOpacity={0.4} name="Calendly" />
                  <Area type="monotone" dataKey="contact_form" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.4} name="Contact Form" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity Feed */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent CTA Activity</CardTitle>
                <Button variant="destructive" size="sm" onClick={() => { clearCTAClicks(); refreshData(); }}>
                  <Trash2 className="w-3 h-3 mr-1" /> Clear History
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {recentClicks.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <MousePointerClick className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="font-medium">No CTA clicks recorded yet</p>
                  <p className="text-sm mt-1">Click the phone or consultation buttons on your site to start tracking</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {recentClicks.map((click) => {
                    const config = ctaTypeConfig[click.type];
                    const Icon = config?.icon || FileText;
                    return (
                      <div key={click.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 ${config?.bgColor || 'bg-muted'} rounded-lg flex items-center justify-center`}>
                            <Icon className={`w-4 h-4 ${config?.color || 'text-foreground'}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{click.label}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{click.page}</span>
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              <span>{formatTime(click.timestamp)}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {click.type.replace('_', ' ')}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* ========== GOOGLE ADS ========== */}
      {activeSection === 'google-ads' && (
        <div className="space-y-6">
          {/* Google Ads Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-700">Active & Tracking</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Google Ads Tag</h3>
                <p className="text-sm text-muted-foreground mt-1 font-mono">AW-17027608656</p>
              </CardContent>
            </Card>
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-700">Conversion Active</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Lead Conversion</h3>
                <p className="text-sm text-muted-foreground mt-1 font-mono">X7WjCPbVt_ob / $1.00 USD</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Megaphone className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Base Tag</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Global Site Tag</h3>
                <p className="text-sm text-muted-foreground mt-1 font-mono">AW-17027615637</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Google Ads Management</CardTitle>
              <CardDescription>Quick access to your Google Ads dashboards and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Google Ads Dashboard', url: 'https://ads.google.com', desc: 'Manage campaigns, budgets, and keywords' },
                  { label: 'Conversion Tracking', url: 'https://ads.google.com/aw/conversions', desc: 'View conversion data and goals' },
                  { label: 'Keyword Planner', url: 'https://ads.google.com/aw/keywordplanner', desc: 'Research keywords and search volume' },
                  { label: 'Ad Performance', url: 'https://ads.google.com/aw/campaigns', desc: 'Review campaign performance metrics' },
                  { label: 'Billing & Payments', url: 'https://ads.google.com/aw/billing', desc: 'Manage ad spend and billing info' },
                  { label: 'Tag Assistant', url: 'https://tagassistant.google.com/', desc: 'Debug and verify your Google tags' },
                ].map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-accent/30 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-muted-foreground">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conversion Setup Checklist */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Setup Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { item: 'Google Ads Global Site Tag installed', done: true },
                  { item: 'GA4 tag (G-1TZ6VX86KX) linked', done: true },
                  { item: 'Lead form conversion tracking on /consultation', done: true },
                  { item: 'Phone call click tracking (CTA buttons)', done: true },
                  { item: 'Remarketing audience configured', done: false },
                  { item: 'Enhanced conversions enabled', done: false },
                ].map((check, i) => (
                  <div key={i} className="flex items-center gap-3 p-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${check.done ? 'bg-green-500 text-white' : 'border-2 border-muted-foreground text-muted-foreground'}`}>
                      {check.done ? '✓' : ''}
                    </div>
                    <span className={`text-sm ${check.done ? 'text-foreground' : 'text-muted-foreground'}`}>{check.item}</span>
                    {!check.done && <Badge variant="outline" className="text-xs ml-auto">To Do</Badge>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ========== GOOGLE ANALYTICS ========== */}
      {activeSection === 'google-analytics' && (
        <div className="space-y-6">
          {/* GA4 Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-700">Live & Collecting Data</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">GA4 Property</h3>
                <p className="text-sm text-muted-foreground mt-1 font-mono">G-1TZ6VX86KX</p>
                <p className="text-xs text-muted-foreground mt-2">Installed in index.html alongside Google Ads tag</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-3">Tracked Pages ({26} URLs)</h3>
                <div className="space-y-1 max-h-[120px] overflow-y-auto text-xs font-mono text-muted-foreground">
                  {['/', '/about', '/services', '/contact', '/consultation', '/blog', '/check-ordering'].map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {p}
                    </div>
                  ))}
                  <p className="text-xs italic">+ 19 more pages in sitemap.xml</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Google Analytics Dashboards</CardTitle>
              <CardDescription>Direct links to your GA4 reports and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'GA4 Home', url: 'https://analytics.google.com', desc: 'Overview of your website performance', icon: BarChart3 },
                  { label: 'Real-Time Report', url: 'https://analytics.google.com/analytics/web/#/realtime', desc: 'See who is on your site right now', icon: Eye },
                  { label: 'Acquisition Report', url: 'https://analytics.google.com/analytics/web/#/report/acquisition', desc: 'Where your visitors come from', icon: TrendingUp },
                  { label: 'Engagement Report', url: 'https://analytics.google.com/analytics/web/#/report/engagement', desc: 'How users interact with your site', icon: MousePointerClick },
                  { label: 'Search Console', url: 'https://search.google.com/search-console', desc: 'Search performance and indexing', icon: Globe },
                  { label: 'PageSpeed Insights', url: 'https://pagespeed.web.dev/analysis?url=https://clearledger-clarity-flow.lovable.app', desc: 'Check your site speed scores', icon: Monitor },
                ].map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="group">
                      <div className="p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-accent/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</h4>
                          <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                        </div>
                        <p className="text-xs text-muted-foreground">{link.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics to Watch */}
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics to Monitor</CardTitle>
              <CardDescription>Focus on these GA4 metrics to grow ClearLedger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { metric: 'Organic Search Traffic', why: 'Blog posts and location pages driving free traffic', target: '↑ 20% month-over-month' },
                  { metric: 'Consultation Page Conversions', why: 'How many visitors become leads', target: '> 5% conversion rate' },
                  { metric: 'Average Session Duration', why: 'Longer sessions = more engaged visitors', target: '> 2 minutes' },
                  { metric: 'Bounce Rate (by Page)', why: 'Identify pages that need improvement', target: '< 50% on service pages' },
                  { metric: 'Top Landing Pages', why: 'Know which pages attract the most visitors', target: 'Optimize top 5 pages' },
                  { metric: 'Device Split (Mobile vs Desktop)', why: 'Ensure mobile experience is excellent', target: '60/40 mobile-first' },
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-border rounded-xl">
                    <h4 className="font-medium text-foreground">{item.metric}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.why}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{item.target}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ========== BLOG MANAGER ========== */}
      {activeSection === 'blog' && (
        <div className="space-y-6">
          {/* Blog Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-5 text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{blogPosts.length}</p>
                <p className="text-sm text-muted-foreground">Published Articles</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{blogPosts.reduce((sum, p) => sum + p.readTime, 0)}</p>
                <p className="text-sm text-muted-foreground">Total Read Minutes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{blogPosts.reduce((sum, p) => sum + p.tags.length, 0)}</p>
                <p className="text-sm text-muted-foreground">SEO Keywords Targeted</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 text-center">
                <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{new Set(blogPosts.map(p => p.category)).size}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </CardContent>
            </Card>
          </div>

          {/* All Blog Articles */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Blog Articles</CardTitle>
                  <CardDescription>Manage your SEO-optimized long-form content</CardDescription>
                </div>
                <a href="/blog" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Blog
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border border-border rounded-xl hover:bg-accent/30 transition-colors">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <img src={post.image} alt="" className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-medium text-foreground text-sm truncate">{post.title}</h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                          <span>•</span>
                          <span>{post.readTime} min read</span>
                          <span>•</span>
                          <span>{post.datePublished}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {post.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="text-xs bg-accent px-1.5 py-0.5 rounded text-accent-foreground">#{tag}</span>
                          ))}
                          {post.tags.length > 4 && (
                            <span className="text-xs text-muted-foreground">+{post.tags.length - 4} more</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3" />
                        </Button>
                      </a>
                      {post.featured && <Badge className="bg-yellow-500/10 text-yellow-700 border-yellow-500/30">Featured</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ========== SEO & SITE HEALTH ========== */}
      {activeSection === 'seo' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-5">
                <h3 className="font-bold text-foreground">Sitemap</h3>
                <p className="text-2xl font-bold text-green-600 mt-1">26 URLs</p>
                <p className="text-xs text-muted-foreground mt-1">Last updated: March 14, 2026</p>
              </CardContent>
            </Card>
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-5">
                <h3 className="font-bold text-foreground">robots.txt</h3>
                <p className="text-sm font-medium text-green-600 mt-1">✓ Configured</p>
                <p className="text-xs text-muted-foreground mt-1">Allows all crawlers</p>
              </CardContent>
            </Card>
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-5">
                <h3 className="font-bold text-foreground">Meta Tags</h3>
                <p className="text-sm font-medium text-green-600 mt-1">✓ SEO Component Active</p>
                <p className="text-xs text-muted-foreground mt-1">Dynamic per-page SEO via Helmet</p>
              </CardContent>
            </Card>
          </div>

          {/* Page Index */}
          <Card>
            <CardHeader>
              <CardTitle>Indexed Pages Overview</CardTitle>
              <CardDescription>All pages in your sitemap with their SEO priority</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { url: '/', priority: '1.0', label: 'Homepage' },
                  { url: '/services', priority: '0.9', label: 'Services' },
                  { url: '/consultation', priority: '0.9', label: 'Consultation' },
                  { url: '/quickbooks-services', priority: '0.8', label: 'QuickBooks Services' },
                  { url: '/monthly-management', priority: '0.8', label: 'Monthly Management' },
                  { url: '/billing-accounts-payable', priority: '0.8', label: 'Billing & AP' },
                  { url: '/cleanup-advisory', priority: '0.8', label: 'Cleanup & Advisory' },
                  { url: '/check-ordering', priority: '0.8', label: 'Check Ordering' },
                  { url: '/about', priority: '0.7', label: 'About' },
                  { url: '/contact', priority: '0.7', label: 'Contact' },
                  { url: '/blog', priority: '0.7', label: 'Blog' },
                  { url: '/texas-bookkeeping', priority: '0.7', label: 'Texas' },
                  { url: '/oklahoma-bookkeeping', priority: '0.7', label: 'Oklahoma' },
                  { url: '/florida-bookkeeping', priority: '0.7', label: 'Florida' },
                ].map((page) => (
                  <div key={page.url} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/30 transition-colors text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="font-mono text-xs text-muted-foreground">{page.url}</span>
                      <span className="text-foreground">{page.label}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">P: {page.priority}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SEO Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Tools & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Google Search Console', url: 'https://search.google.com/search-console', desc: 'Monitor search performance' },
                  { label: 'Rich Results Test', url: 'https://search.google.com/test/rich-results', desc: 'Test structured data markup' },
                  { label: 'Mobile-Friendly Test', url: 'https://search.google.com/test/mobile-friendly', desc: 'Check mobile compatibility' },
                  { label: 'PageSpeed Insights', url: 'https://pagespeed.web.dev/', desc: 'Analyze page speed' },
                  { label: 'Submit Sitemap', url: 'https://search.google.com/search-console/sitemaps', desc: 'Submit sitemap.xml to Google' },
                  { label: 'Bing Webmaster', url: 'https://www.bing.com/webmasters', desc: 'Submit to Bing as well' },
                ].map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="p-4 border border-border rounded-xl hover:border-primary/50 hover:bg-accent/30 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{link.label}</h4>
                        <ExternalLink className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WebsiteTrackingTab;
