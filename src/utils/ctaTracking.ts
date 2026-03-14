// CTA Click Tracking Utility - localStorage-based tracking for admin dashboard

export interface CTAClickEvent {
  id: string;
  type: 'phone_call' | 'book_consultation' | 'calendly_book' | 'contact_form';
  label: string;
  timestamp: string;
  page: string;
  userAgent: string;
  referrer: string;
}

export interface CTADailySummary {
  date: string;
  phone_call: number;
  book_consultation: number;
  calendly_book: number;
  contact_form: number;
  total: number;
}

const STORAGE_KEY = 'clearledger_cta_clicks';

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const trackCTAClick = (type: CTAClickEvent['type'], label: string) => {
  try {
    const event: CTAClickEvent = {
      id: generateId(),
      type,
      label,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct',
    };

    const existing = getCTAClicks();
    existing.push(event);

    // Keep last 10,000 events max
    const trimmed = existing.slice(-10000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));

    console.log(`[CTA Tracked] ${type}: ${label} on ${event.page}`);
    return event;
  } catch (e) {
    console.error('CTA tracking error:', e);
    return null;
  }
};

export const getCTAClicks = (): CTAClickEvent[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const getCTAClicksByType = (type: CTAClickEvent['type']): CTAClickEvent[] => {
  return getCTAClicks().filter(e => e.type === type);
};

export const getCTAClicksByDateRange = (startDate: Date, endDate: Date): CTAClickEvent[] => {
  return getCTAClicks().filter(e => {
    const d = new Date(e.timestamp);
    return d >= startDate && d <= endDate;
  });
};

export const getCTADailySummaries = (days: number = 30): CTADailySummary[] => {
  const clicks = getCTAClicks();
  const summaries: Record<string, CTADailySummary> = {};

  // Initialize last N days
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    summaries[key] = { date: key, phone_call: 0, book_consultation: 0, calendly_book: 0, contact_form: 0, total: 0 };
  }

  clicks.forEach(click => {
    const key = click.timestamp.split('T')[0];
    if (summaries[key]) {
      summaries[key][click.type]++;
      summaries[key].total++;
    }
  });

  return Object.values(summaries).sort((a, b) => a.date.localeCompare(b.date));
};

export const getCTATotals = () => {
  const clicks = getCTAClicks();
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const todayClicks = clicks.filter(c => c.timestamp.startsWith(today));
  const weekClicks = clicks.filter(c => new Date(c.timestamp) >= weekAgo);
  const monthClicks = clicks.filter(c => new Date(c.timestamp) >= monthAgo);

  const countByType = (arr: CTAClickEvent[]) => ({
    phone_call: arr.filter(c => c.type === 'phone_call').length,
    book_consultation: arr.filter(c => c.type === 'book_consultation').length,
    calendly_book: arr.filter(c => c.type === 'calendly_book').length,
    contact_form: arr.filter(c => c.type === 'contact_form').length,
    total: arr.length,
  });

  return {
    today: countByType(todayClicks),
    thisWeek: countByType(weekClicks),
    thisMonth: countByType(monthClicks),
    allTime: countByType(clicks),
  };
};

export const getRecentCTAClicks = (limit: number = 50): CTAClickEvent[] => {
  return getCTAClicks().slice(-limit).reverse();
};

export const clearCTAClicks = () => {
  localStorage.removeItem(STORAGE_KEY);
};
