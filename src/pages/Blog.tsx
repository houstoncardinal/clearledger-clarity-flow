import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, Linkedin, Facebook, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts, blogCategories, getFeaturedPosts, type BlogPost } from '@/data/blogPosts';
import { getBlogSchema, getEnhancedBreadcrumbSchema } from '@/utils/advancedSchemaMarkup';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredPosts = getFeaturedPosts(2);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const combinedSchema = [
    getBlogSchema(),
    getEnhancedBreadcrumbSchema([{ name: 'Blog', url: '/blog' }])
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog | ClearLedger Solutions - Bookkeeping Tips & Business Insights"
        description="Expert insights on bookkeeping, QuickBooks tips, and small business financial management from certified professionals. Stay informed with our latest articles."
        keywords="bookkeeping blog, QuickBooks tips, small business finance, accounting advice, financial management"
        canonical="/blog"
        schema={combinedSchema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Expert Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              ClearLedger Solutions <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Practical tips, industry insights, and expert advice to help your business thrive financially.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-border/50 bg-card/80 backdrop-blur-sm"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-muted-foreground text-sm">Follow us:</span>
              <a
                href="https://www.linkedin.com/company/yourclearledger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/yourclearledger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="flex-shrink-0"
            >
              All Posts
            </Button>
            {blogCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex-shrink-0"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && !selectedCategory && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Featured Articles
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              {selectedCategory 
                ? blogCategories.find(c => c.id === selectedCategory)?.name 
                : searchQuery 
                  ? `Search Results for "${searchQuery}"` 
                  : 'All Articles'}
            </h2>
            <span className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No articles found matching your criteria.
              </p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Follow us on social media for daily tips, updates, and expert advice on managing your business finances.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/yourclearledger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="gap-2">
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </Button>
            </a>
            <a
              href="https://www.facebook.com/yourclearledger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
                Follow on Facebook
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Featured Post Card Component
const FeaturedPostCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="mb-2 bg-primary text-primary-foreground">
                Featured
              </Badge>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-background line-clamp-2">
                {post.title}
              </h3>
            </div>
          </div>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>
            <p className="text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex items-center justify-between w-full">
              <Badge variant="outline">{categoryName}</Badge>
              <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

// Regular Post Card Component
const PostCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {categoryName}
              </Badge>
              {post.socialLink && (
                post.socialLink.platform === 'linkedin' ? (
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Facebook className="w-4 h-4 text-muted-foreground" />
                )
              )}
            </div>
            <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {post.excerpt}
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default Blog;
