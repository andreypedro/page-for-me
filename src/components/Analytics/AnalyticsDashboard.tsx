import React from 'react';
import AnalyticsCard from './AnalyticsCard';
import VisitorChart from './VisitorChart';
import type { AnalyticsData } from '../../types';

interface Props {
  data: AnalyticsData;
}

export default function AnalyticsDashboard({ data }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsCard
          title="Total Visits"
          value={data.totalVisits}
          trend={+5}
        />
        <AnalyticsCard
          title="Unique Visitors"
          value={data.uniqueVisitors}
          trend={+3}
        />
        <AnalyticsCard
          title="Click Rate"
          value={`${data.clickRate}%`}
          trend={+2}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Visitor Trends
        </h3>
        <VisitorChart data={data.dailyVisits} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Top Links
          </h3>
          <div className="space-y-4">
            {data.topLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between"
              >
                <span className="text-gray-600">{link.title}</span>
                <span className="text-gray-900 font-medium">
                  {link.clicks} clicks
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Visitors by Country
          </h3>
          <div className="space-y-4">
            {data.visitorsByCountry.map((country) => (
              <div
                key={country.country}
                className="flex items-center justify-between"
              >
                <span className="text-gray-600">{country.country}</span>
                <span className="text-gray-900 font-medium">
                  {country.visits} visits
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}