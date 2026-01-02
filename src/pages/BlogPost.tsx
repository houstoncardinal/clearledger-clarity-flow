import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Linkedin, Facebook, Share2, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getPostBySlug, getRelatedPosts, blogCategories } from '@/data/blogPosts';
import { getBlogPostSchema, getEnhancedBreadcrumbSchema } from '@/utils/advancedSchemaMarkup';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, 3);
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;

  const schema = getBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: `https://yourclearledger.com${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: post.author.name,
    category: categoryName,
    tags: post.tags,
    wordCount: post.content.split(/\s+/).length
  });

  const breadcrumbSchema = getEnhancedBreadcrumbSchema([
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  const handleShare = async () => {
    const shareUrl = `https://yourclearledger.com/blog/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl
        });
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        flushList();
        return;
      }

      // Headers
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-8 mb-6">
            {trimmedLine.replace('# ', '')}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-heading font-semibold text-foreground mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        inList = true;
        listItems.push(trimmedLine.replace(/^[-*] /, ''));
      } else if (trimmedLine.match(/^\d+\./)) {
        inList = true;
        listItems.push(trimmedLine.replace(/^\d+\.\s*/, ''));
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground mb-4">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine.startsWith('✅')) {
        flushList();
        elements.push(
          <p key={index} className="flex items-start gap-2 mb-2 text-muted-foreground">
            <span className="text-primary">✅</span>
            <span>{trimmedLine.replace('✅ ', '')}</span>
          </p>
        );
      } else {
        flushList();
        // Process inline bold
        const processedLine = trimmedLine.replace(
          /\*\*(.*?)\*\*/g, 
          '<strong class="font-semibold text-foreground">$1</strong>'
        );
        elements.push(
          <p 
            key={index} 
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | ClearLedger Solutions Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        canonical={`/blog/${post.slug}`}
        ogImage={`https://yourclearledger.com${post.image}`}
        ogType="article"
        schema={[schema, breadcrumbSchema]}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
            </nav>

            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {categoryName}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs">{post.author.title}</p>
                </div>
              </div>
              
              <Separator orientation="vertical" className="h-8" />
              
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>

              {post.socialLink && (
                <a
                  href={post.socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  {post.socialLink.platform === 'linkedin' ? (
                    <Linkedin className="w-4 h-4" />
                  ) : (
                    <Facebook className="w-4 h-4" />
                  )}
                  <span>Originally posted on {post.socialLink.platform === 'linkedin' ? 'LinkedIn' : 'Facebook'}</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {renderContent(post.content)}
            </motion.div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share & Social */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Follow us:</span>
                <a
                  href="https://www.linkedin.com/company/yourclearledger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/yourclearledger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedCategoryName = blogCategories.find(c => c.id === relatedPost.category)?.name || relatedPost.category;
                  
                  return (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                        <CardHeader>
                          <Badge variant="outline" className="w-fit text-xs mb-2">
                            {relatedCategoryName}
                          </Badge>
                          <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-3 h-3" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
            <Link to="/consultation">
              <Button className="gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
