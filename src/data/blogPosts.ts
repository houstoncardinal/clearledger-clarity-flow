// Blog post data - manually curated from LinkedIn and Facebook

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  datePublished: string;
  dateModified: string;
  readTime: number;
  socialLink?: {
    platform: 'linkedin' | 'facebook';
    url: string;
  };
  featured?: boolean;
}

export const blogCategories = [
  { id: 'bookkeeping-tips', name: 'Bookkeeping Tips', description: 'Expert advice for managing your books' },
  { id: 'quickbooks', name: 'QuickBooks', description: 'Tips and tutorials for QuickBooks users' },
  { id: 'small-business', name: 'Small Business', description: 'Insights for entrepreneurs and business owners' },
  { id: 'tax-planning', name: 'Tax Planning', description: 'Strategies to optimize your tax situation' },
  { id: 'industry-insights', name: 'Industry Insights', description: 'News and trends in bookkeeping and finance' }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Common Bookkeeping Mistakes That Cost Small Businesses Thousands',
    slug: '5-common-bookkeeping-mistakes',
    excerpt: 'Discover the most frequent bookkeeping errors that drain your profits and learn how to avoid them with our expert guide.',
    content: `
# 5 Common Bookkeeping Mistakes That Cost Small Businesses Thousands

As a certified QuickBooks ProAdvisor with over 10 years of experience, I've seen countless small businesses struggle with the same bookkeeping issues. These mistakes might seem minor, but they can cost you thousands of dollars over time.

## 1. Mixing Personal and Business Expenses

This is by far the most common mistake I see. When you use the same account for personal and business expenses, it becomes nearly impossible to track your true business performance. It also creates major headaches during tax season.

**The Fix:** Open a dedicated business bank account and credit card. Use them exclusively for business transactions.

## 2. Not Reconciling Accounts Monthly

Many business owners wait until year-end to reconcile their accounts. By then, discrepancies are difficult to identify and resolve.

**The Fix:** Set aside time each month to reconcile your bank and credit card statements with your accounting software.

## 3. Improper Categorization of Expenses

Putting expenses in the wrong categories leads to inaccurate financial reports and potentially missed tax deductions.

**The Fix:** Create a chart of accounts that makes sense for your business and use it consistently. When in doubt, consult with a professional.

## 4. Forgetting to Track Cash Transactions

Cash payments are easy to forget, but they add up. Missing these transactions means your books don't reflect reality.

**The Fix:** Implement a system for tracking all cash transactions, no matter how small.

## 5. Not Backing Up Your Data

Losing your financial data can be catastrophic. Whether it's a computer crash or ransomware attack, the consequences are severe.

**The Fix:** Use cloud-based accounting software like QuickBooks Online, which automatically backs up your data. Additionally, maintain local backups.

## Need Help Getting Your Books in Order?

At ClearLedger Solutions, we specialize in helping small businesses avoid these costly mistakes. Contact us for a free consultation and let's get your finances on track.
    `,
    image: '/blog/bookkeeping-mistakes.jpg',
    category: 'bookkeeping-tips',
    tags: ['bookkeeping', 'small business', 'financial management', 'common mistakes'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2024-12-15',
    dateModified: '2024-12-15',
    readTime: 5,
    socialLink: {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/yourclearledger'
    },
    featured: true
  },
  {
    id: '2',
    title: 'QuickBooks Online vs Desktop: Which Is Right for Your Business in 2025?',
    slug: 'quickbooks-online-vs-desktop-2025',
    excerpt: 'A comprehensive comparison of QuickBooks Online and Desktop to help you make the right choice for your business needs.',
    content: `
# QuickBooks Online vs Desktop: Which Is Right for Your Business in 2025?

Choosing between QuickBooks Online (QBO) and QuickBooks Desktop is one of the most important decisions for your business finances. Let me break down the key differences to help you decide.

## QuickBooks Online Advantages

### Accessibility
- Access your books from anywhere with an internet connection
- Work from your phone, tablet, or any computer
- Perfect for businesses with remote teams

### Automatic Updates
- Always have the latest features
- No manual software updates required
- Enhanced security with automatic patches

### Bank Connections
- Real-time bank feeds
- Automatic transaction imports
- Faster reconciliation

## QuickBooks Desktop Advantages

### One-Time Purchase
- Pay once, use forever (with annual support optional)
- Lower long-term cost for some businesses
- No recurring subscription fees

### Advanced Features
- More robust inventory management
- Better job costing capabilities
- Advanced reporting options

### Offline Access
- Work without internet connection
- Faster performance for large files
- Complete data control

## My Recommendation

For most small businesses in 2025, **QuickBooks Online is the better choice**. The convenience of cloud access, automatic backups, and seamless integrations outweigh the benefits of Desktop for the majority of users.

However, if you have complex inventory needs, require advanced job costing, or prefer a one-time purchase, Desktop might still be your best option.

## Need Help Deciding?

Schedule a free consultation with ClearLedger Solutions. We'll analyze your specific needs and recommend the best solution for your business.
    `,
    image: '/blog/quickbooks-comparison.jpg',
    category: 'quickbooks',
    tags: ['QuickBooks', 'QBO', 'QuickBooks Desktop', 'accounting software', 'comparison'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2024-12-10',
    dateModified: '2024-12-20',
    readTime: 7,
    socialLink: {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/yourclearledger'
    },
    featured: true
  },
  {
    id: '3',
    title: 'Year-End Bookkeeping Checklist for Small Businesses',
    slug: 'year-end-bookkeeping-checklist',
    excerpt: 'Prepare your business for tax season with our comprehensive year-end bookkeeping checklist. Don\'t miss any important steps!',
    content: `
# Year-End Bookkeeping Checklist for Small Businesses

The end of the year is crunch time for bookkeepers and business owners alike. Use this checklist to ensure you're fully prepared for tax season.

## Financial Review Tasks

### ✅ Reconcile All Accounts
- Bank accounts
- Credit cards
- Loans and lines of credit
- Petty cash

### ✅ Review Accounts Receivable
- Send reminders for outstanding invoices
- Evaluate bad debts for write-offs
- Update customer contact information

### ✅ Review Accounts Payable
- Pay outstanding bills before year-end if advantageous
- Review vendor credits
- Update vendor information

## Tax Preparation Tasks

### ✅ Gather Tax Documents
- 1099s for contractors
- W-2s for employees
- Receipts for deductions
- Depreciation schedules

### ✅ Review Payroll Records
- Verify all payroll taxes are paid
- Prepare W-2s and 1099s
- Review employee classifications

### ✅ Maximize Deductions
- Review equipment purchases
- Document home office expenses
- Verify mileage logs are complete

## Planning for Next Year

### ✅ Set Financial Goals
- Review this year's performance
- Create budgets for next year
- Identify areas for improvement

### ✅ Update Systems
- Review your chart of accounts
- Clean up your customer and vendor lists
- Update recurring transactions

## Need Professional Help?

Year-end bookkeeping can be overwhelming. ClearLedger Solutions offers comprehensive year-end cleanup services. Contact us to ensure your books are ready for tax season.
    `,
    image: '/blog/year-end-checklist.jpg',
    category: 'tax-planning',
    tags: ['year-end', 'tax preparation', 'checklist', 'bookkeeping', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2024-11-28',
    dateModified: '2024-12-01',
    readTime: 6,
    socialLink: {
      platform: 'facebook',
      url: 'https://www.facebook.com/yourclearledger'
    },
    featured: false
  },
  {
    id: '4',
    title: 'How Golf Courses Can Improve Their Financial Management',
    slug: 'golf-course-financial-management',
    excerpt: 'Specialized bookkeeping strategies for golf courses, including pro shop inventory, membership tracking, and seasonal cash flow management.',
    content: `
# How Golf Courses Can Improve Their Financial Management

Golf courses face unique financial challenges that require specialized bookkeeping knowledge. From seasonal revenue fluctuations to complex inventory management, here's how to optimize your golf course finances.

## Understanding Golf Course Revenue Streams

### Greens Fees and Cart Rentals
Track daily, weekly, and monthly trends to optimize pricing strategies. Use your data to identify peak times and adjust staffing accordingly.

### Pro Shop Sales
Implement proper inventory tracking for merchandise. Use cost-of-goods-sold reporting to maintain healthy margins.

### Food and Beverage
Separate tracking for the restaurant/bar is essential. Monitor food costs and labor percentages regularly.

### Memberships
Create proper revenue recognition for annual memberships. Track member retention and acquisition costs.

## Seasonal Cash Flow Management

Golf courses often experience significant seasonal variations. Here's how to manage:

1. **Build reserves during peak season** for slow months
2. **Negotiate payment terms** with vendors for off-season
3. **Plan capital improvements** for slower periods
4. **Maintain a line of credit** for emergency needs

## Pro Tips for Golf Course Bookkeeping

- Separate accounts for each revenue center
- Track maintenance costs by area (greens, fairways, clubhouse)
- Monitor utility costs per round played
- Compare performance to industry benchmarks

## Partner with Experts Who Understand Golf

At ClearLedger Solutions, we have extensive experience with golf course clients, including Tanglewood Golf Course and Legacy Ridge Golf Course. We understand the unique needs of golf course operations.

Contact us to learn how we can help your golf course thrive financially.
    `,
    image: '/blog/golf-course-finance.jpg',
    category: 'industry-insights',
    tags: ['golf course', 'industry specific', 'financial management', 'seasonal business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2024-11-15',
    dateModified: '2024-11-15',
    readTime: 8,
    socialLink: {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/yourclearledger'
    },
    featured: false
  },
  {
    id: '5',
    title: 'Understanding Cash Flow: The Lifeblood of Your Business',
    slug: 'understanding-cash-flow',
    excerpt: 'Learn why cash flow matters more than profit and how to manage it effectively for business success.',
    content: `
# Understanding Cash Flow: The Lifeblood of Your Business

Many business owners focus on profit, but cash flow is what keeps your business alive. You can be profitable on paper and still run out of cash. Let's explore why cash flow matters and how to manage it.

## Profit vs. Cash Flow

### Profit
- Revenue minus expenses
- An accounting concept
- Includes non-cash items like depreciation

### Cash Flow
- Actual money moving in and out
- What's in your bank account
- Determines if you can pay bills

## Why Businesses Fail Despite Being Profitable

1. **Timing mismatches** - You pay suppliers before customers pay you
2. **Inventory investment** - Money tied up in stock
3. **Growth costs** - Scaling requires upfront investment
4. **Seasonal variations** - Revenue doesn't match expenses timing

## Cash Flow Management Strategies

### Accelerate Receivables
- Offer early payment discounts
- Invoice immediately
- Follow up on overdue accounts
- Consider invoice factoring

### Manage Payables Wisely
- Take advantage of payment terms
- Negotiate longer terms with suppliers
- Time payments strategically

### Maintain a Cash Reserve
- Target 3-6 months of operating expenses
- Use a separate savings account
- Resist the temptation to invest it all

### Monitor Weekly
- Create a 13-week cash flow forecast
- Update it weekly
- Identify issues before they become crises

## Tools for Cash Flow Management

QuickBooks offers excellent cash flow reporting. Use the Cash Flow Planner to forecast upcoming cash needs and identify potential shortfalls.

## Need Help Managing Your Cash Flow?

ClearLedger Solutions offers cash flow analysis and forecasting as part of our monthly management services. Contact us to learn more.
    `,
    image: '/blog/cash-flow-management.jpg',
    category: 'small-business',
    tags: ['cash flow', 'financial management', 'business tips', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2024-11-01',
    dateModified: '2024-11-01',
    readTime: 6,
    socialLink: {
      platform: 'facebook',
      url: 'https://www.facebook.com/yourclearledger'
    },
    featured: false
  },
  {
    id: '6',
    title: 'Hiring Your First Bookkeeper: What to Look For',
    slug: 'hiring-first-bookkeeper',
    excerpt: 'A guide to finding the right bookkeeper for your small business, whether you hire in-house or outsource.',
    content: `
# Hiring Your First Bookkeeper: What to Look For

When your business grows beyond what you can manage alone, it's time to consider professional bookkeeping help. Here's what to look for and how to decide between hiring in-house or outsourcing.

## Signs You Need a Bookkeeper

- Spending more than 5 hours per week on bookkeeping
- Missing tax deadlines or payments
- Unclear about your business's financial health
- Making decisions without accurate data
- Stressed about money management

## In-House vs. Outsourced Bookkeeping

### In-House Bookkeeper

**Pros:**
- On-site availability
- Deeper company knowledge
- Can handle additional tasks

**Cons:**
- Salary, benefits, training costs
- Limited to one person's skills
- Coverage issues during vacations/illness

### Outsourced Bookkeeping Service

**Pros:**
- Lower total cost in most cases
- Access to team of experts
- Scalable as you grow
- No HR headaches

**Cons:**
- Not physically present
- May require adjustment to communication style

## Key Qualifications to Look For

1. **Experience in your industry** - Industry knowledge is valuable
2. **Software proficiency** - Especially QuickBooks if you use it
3. **References** - Talk to other clients
4. **Professional certifications** - QuickBooks ProAdvisor, certified bookkeeper
5. **Communication skills** - They need to explain finances clearly

## Questions to Ask

- What's your experience with businesses my size?
- How do you handle confidential information?
- What's your turnaround time for monthly reports?
- How do you communicate about issues?
- What software do you use and recommend?

## Why Choose ClearLedger Solutions?

We're a certified QuickBooks ProAdvisor team with 10+ years of experience. We serve clients across 15+ industries and provide the personalized attention your business deserves.

Ready to offload your bookkeeping? Schedule a free consultation today.
    `,
    image: '/blog/hiring-bookkeeper.jpg',
    category: 'small-business',
    tags: ['bookkeeper', 'hiring', 'outsourcing', 'small business', 'business growth'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2024-10-20',
    dateModified: '2024-10-20',
    readTime: 7,
    socialLink: {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/company/yourclearledger'
    },
    featured: false
  }
];

// Helper function to get related posts
export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.id !== currentPostId)
    .map(post => ({
      post,
      score: calculateRelevanceScore(currentPost, post)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
};

// Calculate relevance score between two posts
const calculateRelevanceScore = (post1: BlogPost, post2: BlogPost): number => {
  let score = 0;
  
  // Same category = high relevance
  if (post1.category === post2.category) score += 10;
  
  // Shared tags = medium relevance
  const sharedTags = post1.tags.filter(tag => post2.tags.includes(tag));
  score += sharedTags.length * 3;
  
  // Same author = slight bonus
  if (post1.author.name === post2.author.name) score += 2;
  
  return score;
};

// Get featured posts
export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured)
    .slice(0, limit);
};

// Get posts by category
export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === categoryId);
};

// Get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
