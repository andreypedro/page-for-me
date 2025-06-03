import React, { useState } from 'react';
import AnalyticsCard from '../components/Analytics/AnalyticsCard';
import VisitorChart from '../components/Analytics/VisitorChart';

const mockStats = {
  totalVisits: 2345,
  uniqueVisitors: 1800,
  clickRate: 37,
  topLink: 'WhatsApp',
  conversionRate: 12,
};

const mockTrends = {
  day: [
    { date: '2025-06-01', visits: 45 },
    { date: '2025-06-02', visits: 56 },
    { date: '2025-06-03', visits: 67 },
  ],
  week: [
    { date: '2025-05-27', visits: 210 },
    { date: '2025-06-03', visits: 168 },
  ],
  month: [
    { date: '2025-05-01', visits: 900 },
    { date: '2025-06-01', visits: 1445 },
  ],
};

const filterOptions = [
  { label: 'Dia', value: 'day' },
  { label: 'Semana', value: 'week' },
  { label: 'Mês', value: 'month' },
];

export default function Dashboard() {
  const [filter, setFilter] = useState<'day' | 'week' | 'month'>('day');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard de Analytics
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Visualize o desempenho dos seus links e acompanhe métricas essenciais para impulsionar sua presença digital.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <AnalyticsCard
          title="Visitas Totais"
          value={mockStats.totalVisits}
          trend={+5}
        />
        <AnalyticsCard
          title="Visitantes Únicos"
          value={mockStats.uniqueVisitors}
          trend={+3}
        />
        <AnalyticsCard
          title="Taxa de Cliques"
          value={`${mockStats.clickRate}%`}
          trend={+2}
        />
        <AnalyticsCard
          title="Conversão WhatsApp"
          value={`${mockStats.conversionRate}%`}
          trend={+1}
        />
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-700">
            Visitas ao longo do tempo
          </h2>
          <div className="flex gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() =>
                  setFilter(opt.value as 'day' | 'week' | 'month')
                }
                className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors ${
                  filter === opt.value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <VisitorChart data={mockTrends[filter]} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-lg font-bold text-blue-700 mb-2">
            Link mais clicado
          </span>
          <span className="text-2xl text-gray-800 font-semibold">
            {mockStats.topLink}
          </span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-lg font-bold text-blue-700 mb-2">
            Conversão WhatsApp
          </span>
          <span className="text-2xl text-gray-800 font-semibold">
            {mockStats.conversionRate}%
          </span>
          <span className="text-gray-500 text-sm mt-2">
            Usuários que clicaram e iniciaram conversa
          </span>
        </div>
      </div>
    </div>
  );
}