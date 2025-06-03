export interface LinkBlock {
  id: string;
  title: string;
  url: string;
  type: 'default' | 'book' | 'menu' | 'call' | 'whatsapp' | 'quote';
  icon?: string;
  order: number;
}

export interface Profile {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  theme: string;
  links: LinkBlock[];
}

export interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  clickRate: number;
  topLinks: Array<{
    id: string;
    title: string;
    clicks: number;
  }>;
  visitorsByCountry: Array<{
    country: string;
    visits: number;
  }>;
  dailyVisits: Array<{
    date: string;
    visits: number;
  }>;
}