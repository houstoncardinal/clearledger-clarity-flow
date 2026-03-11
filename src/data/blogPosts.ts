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
    id: '7',
    title: 'How to Fix Messy QuickBooks in 30 Minutes',
    slug: 'fix-messy-quickbooks-30-minutes',
    excerpt: 'Learn a simple 5-step process to clean up your messy QuickBooks records in just 30 minutes. Reconcile accounts, categorize transactions, and get your books back on track.',
    content: `
# How to Fix Messy QuickBooks in 30 Minutes

Running a business means juggling a lot of responsibilities — and bookkeeping often ends up at the bottom of the list. Over time, missed reconciliations, duplicate transactions, and uncategorized expenses can turn your books into a mess.

The good news is that you can make meaningful progress cleaning up your records in just 30 minutes.

Here's a simple process to get your financial data back on track using QuickBooks.

## Step 1: Reconcile Your Bank Accounts

Start by reconciling your bank accounts. This ensures that the transactions in QuickBooks match your actual bank statements.

Look for:

- Missing transactions
- Duplicate entries
- Transactions that cleared but weren't recorded

Reconciling regularly prevents small issues from turning into large reporting errors.

## Step 2: Categorize Unassigned Transactions

Open your transaction list and search for uncategorized expenses or income.

Assign them to the proper categories such as:

- Office expenses
- Software subscriptions
- Marketing costs
- Equipment purchases

Correct categorization helps generate more accurate financial reports.

## Step 3: Review Duplicate Transactions

Duplicate entries are common when importing bank feeds.

Quick scan tips:

- Sort transactions by amount
- Look for identical amounts on the same date
- Confirm before deleting duplicates

## Step 4: Check Your Profit & Loss Report

Run a Profit and Loss report to make sure numbers look reasonable.

Ask yourself:

- Does revenue look correct?
- Are expenses unusually high or low?
- Are any categories empty when they shouldn't be?

## Step 5: Schedule a Monthly Cleanup Routine

The easiest way to avoid messy books is consistency.

We recommend reviewing your books:

- Weekly for transactions
- Monthly for reconciliations

At Your Clear Ledger, we help businesses clean up and maintain accurate books so they can focus on growth instead of spreadsheets.

## Need Help Fixing Messy Books?

Visit yourclearledger.com to schedule a consultation.
    `,
    image: '/blog/fix-messy-quickbooks.jpg',
    category: 'quickbooks',
    tags: ['messy QuickBooks cleanup', 'QuickBooks', 'bookkeeping cleanup', 'reconciliation', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-10',
    dateModified: '2026-03-10',
    readTime: 5,
    featured: true
  },
  {
    id: '8',
    title: 'Bookkeeping Checklist for Small Businesses (2026)',
    slug: 'small-business-bookkeeping-checklist-2026',
    excerpt: 'A practical bookkeeping checklist every small business should follow in 2026 — covering weekly, monthly, quarterly, and annual tasks to stay organized and tax-ready.',
    content: `
# Small Business Bookkeeping Checklist for 2026

Strong bookkeeping habits help business owners make better decisions and stay prepared for tax season.

Here is a practical bookkeeping checklist every small business should follow in 2026.

## Weekly Tasks

- Record income and sales
- Categorize expenses
- Upload receipts
- Review bank transactions

## Monthly Tasks

- Reconcile bank accounts
- Review Profit & Loss statements
- Confirm vendor payments
- Review outstanding invoices

## Quarterly Tasks

- Review financial performance
- Estimate tax obligations
- Analyze business expenses
- Check cash flow trends

## Annual Tasks

- Prepare year-end financial statements
- Organize tax documents
- Review major expenses and deductions
- Work with a tax professional if needed

Maintaining organized records in QuickBooks or similar accounting software makes these tasks significantly easier.

At Your Clear Ledger, we specialize in helping entrepreneurs keep their financial records organized year-round.
    `,
    image: '/blog/bookkeeping-checklist-2026.jpg',
    category: 'bookkeeping-tips',
    tags: ['bookkeeping checklist', 'small business', '2026', 'financial management', 'tax preparation'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    readTime: 4,
    featured: false
  },
  {
    id: '9',
    title: 'How Often Should You Reconcile Accounts?',
    slug: 'how-often-reconcile-bank-accounts',
    excerpt: 'Discover the recommended reconciliation schedule for your business — weekly, monthly, or quarterly — and why regular reconciliation is critical for accurate financial records.',
    content: `
# How Often Should You Reconcile Bank Accounts?

Reconciling accounts ensures that your bookkeeping records match your bank statements.

For most businesses, the recommended reconciliation schedule is:

## Weekly

High-transaction businesses benefit from weekly checks to catch errors early.

## Monthly (Most Common)

Most small businesses reconcile their bank accounts monthly after receiving their bank statement.

## Quarterly

Less frequent reconciliation increases the risk of missed errors or fraud.

## Why Reconciliation Matters

Regular reconciliation helps you:

- Detect duplicate transactions
- Identify missing income
- Prevent inaccurate financial reporting
- Maintain clean records for tax filing

Using tools inside QuickBooks can make the reconciliation process faster and easier.

Businesses that want consistent accuracy often outsource this process to professional bookkeeping services like Your Clear Ledger.
    `,
    image: '/blog/reconcile-accounts.jpg',
    category: 'bookkeeping-tips',
    tags: ['bank reconciliation', 'bookkeeping', 'QuickBooks', 'financial accuracy', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-08',
    dateModified: '2026-03-08',
    readTime: 3,
    featured: false
  },
  {
    id: '10',
    title: 'What Happens If Your Books Are Wrong?',
    slug: 'what-happens-if-business-books-are-incorrect',
    excerpt: 'Incorrect bookkeeping can lead to inaccurate financial decisions, cash flow confusion, tax filing errors, and difficulty getting loans. Learn how to avoid these costly mistakes.',
    content: `
# What Happens If Your Business Books Are Incorrect?

Incorrect bookkeeping can create serious problems for businesses over time.

Even small mistakes can lead to larger financial issues if left unresolved.

## Common Problems Caused by Incorrect Books

### Inaccurate Financial Decisions

If your numbers are wrong, your decisions may be based on incorrect data.

### Cash Flow Confusion

Poor bookkeeping can make it difficult to understand how much cash your business actually has available.

### Tax Filing Errors

Incorrect financial records may result in reporting mistakes when preparing tax returns.

### Difficulty Getting Loans

Lenders often require accurate financial statements before approving financing.

Maintaining accurate records in QuickBooks or other accounting systems is critical for financial clarity.

At Your Clear Ledger, we help business owners maintain organized books so they always understand their financial position.
    `,
    image: '/blog/incorrect-books.jpg',
    category: 'small-business',
    tags: ['incorrect bookkeeping', 'financial errors', 'tax filing', 'cash flow', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-07',
    dateModified: '2026-03-07',
    readTime: 4,
    featured: false
  },
  {
    id: '11',
    title: 'QuickBooks vs Hiring a Bookkeeper: Which Is Better?',
    slug: 'quickbooks-vs-hiring-bookkeeper',
    excerpt: 'Should you rely on QuickBooks alone or hire a professional bookkeeper? Discover the pros and cons of each approach and why combining both often delivers the best results.',
    content: `
# QuickBooks vs Hiring a Bookkeeper: Which Is Better?

Many small business owners wonder whether accounting software alone is enough.

The answer often depends on the complexity of your business.

## Using QuickBooks

QuickBooks is a powerful accounting tool that allows businesses to:

- Track income and expenses
- Generate financial reports
- Manage invoices
- Connect bank accounts

However, software still requires someone to manage it correctly.

## Hiring a Bookkeeper

A professional bookkeeper can:

- Ensure transactions are categorized correctly
- Reconcile accounts regularly
- Maintain clean financial reports
- Identify potential bookkeeping issues early

## The Best Approach

Many businesses combine both.

They use QuickBooks as their accounting system while relying on professionals like Your Clear Ledger to manage and review the books.
    `,
    image: '/blog/quickbooks-vs-bookkeeper.jpg',
    category: 'quickbooks',
    tags: ['QuickBooks', 'bookkeeper', 'outsourcing', 'accounting software', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-06',
    dateModified: '2026-03-06',
    readTime: 4,
    featured: false
  },
  {
    id: '12',
    title: 'Monthly Bookkeeping Checklist Every Entrepreneur Should Follow',
    slug: 'monthly-bookkeeping-checklist-entrepreneurs',
    excerpt: 'A consistent monthly bookkeeping routine keeps financial records accurate. Follow this 5-step checklist to review transactions, reconcile accounts, and optimize expenses.',
    content: `
# Monthly Bookkeeping Checklist Every Entrepreneur Should Follow

A consistent monthly bookkeeping routine helps keep financial records accurate and organized.

## Step 1: Review Bank Transactions

Confirm all income and expenses are properly categorized.

## Step 2: Reconcile Accounts

Match your records with your bank statements.

## Step 3: Review Financial Reports

Review key reports including:

- Profit & Loss
- Balance Sheet
- Cash Flow

## Step 4: Follow Up on Invoices

Ensure all outstanding invoices are tracked.

## Step 5: Review Expenses

Look for areas where costs may be reduced or optimized.

Using accounting tools like QuickBooks makes this process easier for growing businesses.
    `,
    image: '/blog/monthly-checklist-entrepreneurs.jpg',
    category: 'bookkeeping-tips',
    tags: ['monthly bookkeeping', 'entrepreneur checklist', 'financial reports', 'QuickBooks', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-05',
    dateModified: '2026-03-05',
    readTime: 3,
    featured: false
  },
  {
    id: '13',
    title: '10 Signs Your Business Needs a Bookkeeper',
    slug: '10-signs-your-business-needs-a-bookkeeper',
    excerpt: 'Is it time to hire a professional bookkeeper? Here are 10 clear signs your business has outgrown DIY bookkeeping and needs expert financial help.',
    content: `
# 10 Signs Your Business Needs a Bookkeeper

As businesses grow, bookkeeping responsibilities often become more complex.

Here are 10 signs it may be time to bring in professional help.

1. Your books are months behind
2. Bank accounts are not reconciled
3. You're unsure of your monthly profit
4. Tax season feels stressful every year
5. Expenses are difficult to track
6. You have multiple income streams
7. Financial reports are confusing
8. You're spending too much time on bookkeeping
9. You want better financial insights
10. Your business is growing quickly

Professional bookkeeping services can help maintain accurate records and give business owners greater financial visibility.

At Your Clear Ledger, our goal is to make bookkeeping simple so business owners can focus on running their companies.
    `,
    image: '/blog/signs-need-bookkeeper.jpg',
    category: 'small-business',
    tags: ['bookkeeper', 'business growth', 'financial management', 'outsourcing', 'small business'],
    author: {
      name: 'JJ Eldredge',
      avatar: '/team/jj-eldredge.jpg',
      title: 'Owner & Certified QuickBooks ProAdvisor'
    },
    datePublished: '2026-03-04',
    dateModified: '2026-03-04',
    readTime: 4,
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
