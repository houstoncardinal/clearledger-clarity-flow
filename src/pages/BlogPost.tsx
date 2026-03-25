import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Linkedin, Facebook, Share2, Tag, ChevronUp, BookOpen, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getPostBySlug, getRelatedPosts, blogCategories } from '@/data/blogPosts';
import { getBlogPostSchema, getEnhancedBreadcrumbSchema, getBlogHowToSchema, getSpeakableSchema } from '@/utils/advancedSchemaMarkup';
import { COMPANY_INFO } from '@/utils/advancedSchemaMarkup';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [readProgress, setReadProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = rect.height;
      const scrolled = window.scrollY - articleTop;
      const progress = Math.min(Math.max(scrolled / (articleHeight - window.innerHeight), 0), 1);
      setReadProgress(progress * 100);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract table of contents from content
  const tableOfContents = useMemo(() => {
    if (!post) return [];
    const lines = post.content.trim().split('\n');
    const toc: { text: string; level: number; id: string }[] = [];
    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
        const text = trimmed.replace('## ', '');
        toc.push({ text, level: 2, id: text.toLowerCase().replace(/[^a-z0-9]+/g, '-') });
      }
    });
    return toc;
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, 3);
  const categoryName = blogCategories.find(c => c.id === post.category)?.name || post.category;
  const wordCount = post.content.split(/\s+/).length;

  const schema = getBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: `https://www.yourclearledger.com${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: post.author.name,
    category: categoryName,
    tags: post.tags,
    wordCount
  });

  const breadcrumbSchema = getEnhancedBreadcrumbSchema([
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  const speakableSchema = getSpeakableSchema(`/blog/${post.slug}`);

  const howToSlugs: Record<string, { steps: Array<{ name: string; text: string }>; totalTime?: string }> = {
    'fix-messy-quickbooks-30-minutes': {
      totalTime: 'PT30M',
      steps: [
        { name: 'Reconcile Your Bank Accounts', text: 'Start by reconciling your bank accounts to ensure transactions in QuickBooks match your actual bank statements.' },
        { name: 'Categorize Unassigned Transactions', text: 'Open your transaction list and search for uncategorized expenses or income.' },
        { name: 'Review Duplicate Transactions', text: 'Sort transactions by amount and look for identical amounts on the same date.' },
        { name: 'Check Your Profit & Loss Report', text: 'Run a Profit and Loss report to verify revenue looks correct.' },
        { name: 'Schedule a Monthly Cleanup Routine', text: 'Set up a recurring schedule to review your books weekly.' }
      ]
    },
    'small-business-bookkeeping-checklist-2026': {
      steps: [
        { name: 'Complete Weekly Tasks', text: 'Record income and sales, categorize expenses, upload receipts.' },
        { name: 'Complete Monthly Tasks', text: 'Reconcile bank accounts, review financial statements.' },
        { name: 'Complete Quarterly Tasks', text: 'Review financial performance, estimate tax obligations.' },
        { name: 'Complete Annual Tasks', text: 'Prepare year-end statements, organize tax documents.' }
      ]
    },
    'monthly-bookkeeping-checklist-entrepreneurs': {
      steps: [
        { name: 'Review Bank Transactions', text: 'Confirm all income and expenses are properly categorized.' },
        { name: 'Reconcile Accounts', text: 'Match your bookkeeping records with your bank statements.' },
        { name: 'Review Financial Reports', text: 'Review key reports including Profit & Loss and Balance Sheet.' },
        { name: 'Follow Up on Invoices', text: 'Ensure all outstanding invoices are tracked.' },
        { name: 'Review Expenses', text: 'Look for areas where costs may be reduced.' }
      ]
    }
  };

  const allSchemas: object[] = [schema, breadcrumbSchema, speakableSchema];

  if (howToSlugs[post.slug]) {
    allSchemas.push(getBlogHowToSchema({
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      datePublished: post.datePublished,
      totalTime: howToSlugs[post.slug].totalTime,
      steps: howToSlugs[post.slug].steps
    }));
  }

  const handleShare = async () => {
    const shareUrl = `https://www.yourclearledger.com/blog/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url: shareUrl });
      } catch { /* cancelled */ }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };


  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let isOrderedList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        const ListTag = isOrderedList ? 'ol' : 'ul';
        elements.push(
          <ListTag 
            key={`list-${elements.length}`} 
            className={`${isOrderedList ? 'list-decimal' : 'list-disc'} pl-6 space-y-3 mb-8 text-muted-foreground`}
          >
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed text-base md:text-lg pl-2">
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>') }} />
              </li>
            ))}
          </ListTag>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (!trimmedLine || trimmedLine === '---') {
        flushList();
        if (trimmedLine === '---') {
          elements.push(<Separator key={`sep-${index}`} className="my-10" />);
        }
        return;
      }

      // H1 → render as H2 (page already has H1)
      if (trimmedLine.startsWith('# ') && !trimmedLine.startsWith('## ')) {
        flushList();
        const text = trimmedLine.replace('# ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h2 key={index} id={id} className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-14 mb-6 pb-3 border-b border-border/40 scroll-mt-24">
            {text}
          </h2>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        const text = trimmedLine.replace('## ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h2 key={index} id={id} className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-14 mb-6 pb-3 border-b border-border/40 scroll-mt-24">
            {text}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-heading font-semibold text-foreground mt-10 mb-4 scroll-mt-24">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        isOrderedList = false;
        inList = true;
        listItems.push(trimmedLine.replace(/^[-*] /, ''));
      } else if (trimmedLine.match(/^\d+\./)) {
        isOrderedList = true;
        inList = true;
        listItems.push(trimmedLine.replace(/^\d+\.\s*/, ''));
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && !trimmedLine.includes('**:')) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground text-lg mb-4 mt-6">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine.startsWith('✅')) {
        flushList();
        elements.push(
          <div key={index} className="flex items-start gap-3 mb-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <span className="text-primary text-lg mt-0.5">✅</span>
            <span className="text-foreground text-base md:text-lg leading-relaxed">{trimmedLine.replace('✅ ', '')}</span>
          </div>
        );
      } else {
        flushList();
        const processedLine = trimmedLine.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="font-semibold text-foreground">$1</strong>'
        );
        elements.push(
          <p
            key={index}
            className="text-muted-foreground text-base md:text-lg leading-[1.8] mb-6"
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
        ogImage={`https://www.yourclearledger.com${post.image}`}
        ogType="article"
        schema={allSchemas}
        article={{
          publishedTime: post.datePublished,
          modifiedTime: post.dateModified,
          author: post.author.name,
          section: categoryName,
          tags: post.tags
        }}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-muted">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70"
          style={{ width: `${readProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground truncate max-w-[250px]">{post.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-medium">
                {categoryName}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {wordCount.toLocaleString()} words
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-foreground mb-6 leading-[1.15] tracking-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.title}</p>
                </div>
              </div>

              <Separator orientation="vertical" className="h-8 hidden sm:block" />

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.datePublished).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>

              {post.socialLink && (
                <a
                  href={post.socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {post.socialLink.platform === 'linkedin' ? <Linkedin className="w-4 h-4" /> : <Facebook className="w-4 h-4" />}
                  <span>Originally on {post.socialLink.platform === 'linkedin' ? 'LinkedIn' : 'Facebook'}</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article id="article-content" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto lg:grid lg:grid-cols-[1fr_220px] lg:max-w-5xl lg:gap-12">
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="min-w-0"
            >
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-14 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share & Social */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/company/yourclearledger" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/yourclearledger" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {tableOfContents.length > 2 && (
                  <div className="border border-border/50 rounded-xl p-5 bg-card">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">In This Article</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors leading-snug py-1"
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="border border-primary/20 rounded-xl p-5 bg-primary/5">
                  <h3 className="text-sm font-semibold text-foreground mb-2">Need Expert Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a free consultation with our certified QuickBooks ProAdvisors.
                  </p>
                  <Link to="/consultation">
                    <Button size="sm" className="w-full gap-2 mb-2">
                      Book Free Consultation
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="block">
                    <Button size="sm" variant="outline" className="w-full gap-2">
                      <Phone className="w-3.5 h-3.5" />
                      {COMPANY_INFO.phoneLocal}
                    </Button>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Inline CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Get Your Books in Order?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
              ClearLedger Solutions helps businesses like yours achieve financial clarity. 
              Schedule a free, no-obligation consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/consultation">
                <Button size="lg" className="gap-2">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call {COMPANY_INFO.phoneLocal}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
                Continue Reading
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedCategoryName = blogCategories.find(c => c.id === relatedPost.category)?.name || relatedPost.category;
                  return (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border/50">
                        <CardHeader>
                          <Badge variant="outline" className="w-fit text-xs mb-2">{relatedCategoryName}</Badge>
                          <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
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

      {/* Back to Blog */}
      <section className="py-10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                All Articles
              </Button>
            </Link>
            <Link to="/consultation">
              <Button className="gap-2">
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
