import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Props {
  title: string;
  value: number | string;
  trend: number;
}

export default function AnalyticsCard({ title, value, trend }: Props) {
  const isPositive = trend >= 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p
          className={`ml-2 flex items-baseline text-sm font-semibold ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? (
            <TrendingUp className="h-4 w-4 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 mr-1" />
          )}
          {Math.abs(trend)}%
        </p>
      </div>
    </div>
  );
}