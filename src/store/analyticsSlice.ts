import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AnalyticsData } from '../types';

const initialData: AnalyticsData = {
  totalVisits: 1234,
  uniqueVisitors: 987,
  clickRate: 24,
  topLinks: [
    { id: '1', title: 'My Website', clicks: 456 },
    { id: '2', title: 'Book Now', clicks: 234 },
    { id: '3', title: 'Contact', clicks: 123 },
  ],
  visitorsByCountry: [
    { country: 'United States', visits: 456 },
    { country: 'United Kingdom', visits: 234 },
    { country: 'Germany', visits: 123 },
  ],
  dailyVisits: [
    { date: '2024-01-01', visits: 45 },
    { date: '2024-01-02', visits: 56 },
    { date: '2024-01-03', visits: 67 },
    { date: '2024-01-04', visits: 78 },
    { date: '2024-01-05', visits: 89 },
  ],
};

interface AnalyticsState {
  data: AnalyticsData | null;
}

const initialState: AnalyticsState = {
  data: initialData,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setAnalytics(state, action: PayloadAction<AnalyticsData>) {
      state.data = action.payload;
    },
    clearAnalytics(state) {
      state.data = null;
    },
  },
});

export const { setAnalytics, clearAnalytics } = analyticsSlice.actions;
export default analyticsSlice.reducer;
