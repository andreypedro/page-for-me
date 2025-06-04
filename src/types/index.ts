export interface LinkBlock {
  id: string;
  title: string;
  url: string;
  type: 'default' | 'book' | 'menu' | 'call' | 'whatsapp' | 'quote' | 'instagram' | 'facebook' | 'twitter' | 'tiktok';
  icon?: string;
  order: number;
}

export interface SocialLinkBlock {
  id: string;
  url: string;
  type: 'whatsapp' | 'instagram' | 'facebook' | 'twitter' | 'tiktok' | 'email';
}

export interface Profile {
  id: string;
  name: string;
  nickname: string;
  bio: string;
  avatar?: string;
  theme: string;
  socialLinks: SocialLinkBlock[];
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