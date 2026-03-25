import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Linkedin, Facebook, Search, Filter, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { blogPosts, blogCategories, type BlogPost } from '@/data/blogPosts';
import { getBlogSchema, getEnhancedBreadcrumbSchema, getBlogListingSchema, getSpeakableSchema } from '@/utils/advancedSchemaMarkup';
import { COMPANY_INFO } from '@/utils/advancedSchemaMarkup';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  // Sort: newest first
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => 
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
  }, [filteredPosts]);

  const latestPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  const combinedSchema = [
    getBlogSchema(),
    getEnhancedBreadcrumbSchema([{ name: 'Blog', url: '/blog' }]),
    getBlogListingSchema(blogPosts.map(p => ({
      title: p.title,
      url: `/blog/${p.slug}`,
      datePublished: p.datePublished,
      description: p.excerpt
    }))),
    getSpeakableSchema('/blog')
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
      
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-background" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 tracking-tight">
              Insights & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Practical bookkeeping guidance, QuickBooks expertise, and financial strategies from the ClearLedger team.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4.5 h-4.5" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-4 h-12 text-base rounded-xl border-border/60 bg-card shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <div className="border-b border-border/50 bg-background sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            <Button
              variant={selectedCategory === null ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="flex-shrink-0 rounded-full text-xs h-8"
            >
              All
            </Button>
            {blogCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex-shrink-0 rounded-full text-xs h-8"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Latest / Hero Post */}
      {latestPost && !searchQuery && !selectedCategory && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <LatestPostCard post={latestPost} />
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className={`pb-20 ${!searchQuery && !selectedCategory ? 'pt-0' : 'pt-12'}`}>
        <div className="container mx-auto px-4">
          {(searchQuery || selectedCategory) && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-heading font-semibold text-foreground">
                {selectedCategory 
                  ? blogCategories.find(c => c.id === selectedCategory)?.name 
                  : `Results for "${searchQuery}"`}
              </h2>
              <span className="text-sm text-muted-foreground">
                {sortedPosts.length} article{sortedPosts.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}

          {(searchQuery || selectedCategory ? sortedPosts : remainingPosts).length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchQuery || selectedCategory ? sortedPosts : remainingPosts).map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No articles match your search.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Need help with your books?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free consultation with our team and discover how ClearLedger can simplify your financial management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/consultation">
                <Button size="lg" className="gap-2 rounded-xl">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" variant="outline" className="gap-2 rounded-xl">
                  Call {COMPANY_INFO.phoneLocal}
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="https://www.linkedin.com/company/yourclearledger" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/yourclearledger" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ─── Latest Post (Hero Card) ─── */
const LatestPostCard = ({ post }: { post: BlogPost }) => {
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/blog/${post.slug}`} className="group block">
        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              {post.heroImage || post.image ? (
                <img 
                  src={post.heroImage || post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/20" />
                </div>
              )}
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground border-0 shadow-lg text-xs">
                  Latest
                </Badge>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4 text-xs rounded-full">
                {categoryName}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} min read
                </span>
              </div>
              <span className="text-primary font-medium flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ─── Post Card ─── */
const PostCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link to={`/blog/${post.slug}`} className="group block h-full">
        <article className="h-full rounded-xl border border-border/50 bg-card overflow-hidden hover:shadow-lg hover:border-border transition-all duration-300 flex flex-col">
          {/* Thumbnail */}
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            {post.heroImage || post.image ? (
              <img 
                src={post.heroImage || post.image} 
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-primary/15" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-[11px] rounded-full font-normal px-2.5 py-0.5">
                {categoryName}
              </Badge>
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min
              </span>
            </div>
            
            <h3 className="text-base font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
              {post.title}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-border/30">
              <span className="text-xs text-muted-foreground">
                {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default Blog;
