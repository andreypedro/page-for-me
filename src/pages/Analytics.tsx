import React, { useState } from 'react';
import AnalyticsDashboard from '../components/Analytics/AnalyticsDashboard';
import VisitorChart from '../components/Analytics/VisitorChart';
import type { AnalyticsData } from '../types';

const mockData: AnalyticsData = {
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

const filterOptions = [
  { label: 'Dia', value: 'day' },
  { label: 'Semana', value: 'week' },
  { label: 'Mês', value: 'month' },
];

const mockTrends = {
  day: mockData.dailyVisits,
  week: [
    { date: '2024-01-01', visits: 168 },
    { date: '2024-01-08', visits: 210 },
  ],
  month: [
    { date: '2024-01', visits: 300 },
    { date: '2024-02', visits: 400 },
  ],
};

const trafficSources = [
  {
    name: 'Instagram',
    visits: 600,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#E1306C"/>
        <path d="M20 13.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm7.1-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    visits: 320,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#000"/>
        <path d="M28 18.5c-1.7 0-3-1.3-3-3V10h-3v13.5a2.5 2.5 0 1 1-2.5-2.5c.2 0 .5 0 .7.1v-3.1c-.2 0-.5-.1-.7-.1a5.5 5.5 0 1 0 5.5 5.5V19c.9.6 2 1 3 1v-1.5Z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'X',
    visits: 120,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#000"/>
        <path d="M25.7 13h2.2l-5.1 5.8 6 7.2h-4.7l-3.7-4.5-4.2 4.5h-2.2l5.4-5.8-5.7-7.2h4.7l3.4 4.5 4-4.5Zm-1.1 10.2h1.2l-7.7-9.4h-1.2l7.7 9.4Z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Outros',
    visits: 80,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="12" fill="#64748b"/>
        <circle cx="20" cy="20" r="8" fill="#fff"/>
      </svg>
    ),
  },
];

export default function Analytics() {
  const [filter, setFilter] = useState<'day' | 'week' | 'month'>('day');
  // Simulação de plano: 'free' ou 'premium'
  const [plan, setPlan] = useState<'free' | 'premium'>('free');
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner de aviso para plano Free */}
      {plan === 'free' && showBanner && (
        <div className="mb-6 bg-blue-100 border border-blue-300 rounded-lg p-4 flex items-center justify-between shadow">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">Free</span>
            <span className="text-blue-900 font-medium">Você está no plano gratuito. Faça upgrade para liberar todos os recursos de analytics!</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
              onClick={() => window.location.href = '/subscription'}
            >
              Fazer upgrade
            </button>
            <button
              className="ml-2 text-blue-700 hover:text-blue-900 text-xl font-bold px-2"
              onClick={() => setShowBanner(false)}
              title="Fechar aviso"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Switch de plano para desenvolvimento */}
      <div className="mb-4 flex gap-2 items-center">
        <span className="text-xs text-gray-500">[Dev] Plano:</span>
        <button
          className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${plan === 'free' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'}`}
          onClick={() => setPlan('free')}
        >
          Free
        </button>
        <button
          className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${plan === 'premium' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'}`}
          onClick={() => setPlan('premium')}
        >
          Premium
        </button>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics detalhado</h1>
        <p className="text-base text-gray-600 mt-2">
          Acompanhe o desempenho dos seus links, veja tendências e descubra oportunidades para aumentar seu alcance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-lg font-bold text-blue-700 mb-2">Visitas Totais</span>
            <span className="text-2xl text-gray-800 font-semibold">{mockData.totalVisits}</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-lg font-bold text-blue-700 mb-2">Visitantes Únicos</span>
            <span className="text-2xl text-gray-800 font-semibold">{mockData.uniqueVisitors}</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-lg font-bold text-blue-700 mb-2">Taxa de Cliques</span>
            <span className="text-2xl text-gray-800 font-semibold">{mockData.clickRate}%</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 relative">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-lg font-bold text-blue-700 mb-2">Top Link</span>
            <span className="text-2xl text-gray-800 font-semibold">{mockData.topLinks[0].title}</span>
          </div>
          {plan === 'free' && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-10 rounded-xl">
              <span className="text-blue-700 font-bold mb-2">Recurso premium</span>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
                onClick={() => window.location.href = '/subscription'}
              >
                Faça upgrade para ver
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Traffic Sources Section */}
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="text-lg font-bold text-blue-700 mb-4 md:mb-0">Fontes de Visita</h2>
          <div className="flex flex-wrap gap-4 w-full md:w-auto justify-center">
            {trafficSources.map((src) => (
              <div key={src.name} className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-2 shadow-sm border border-blue-100 min-w-[120px]">
                {src.icon}
                <span className="font-medium text-gray-800">{src.name}</span>
                <span className="ml-2 text-blue-700 font-bold">{src.visits}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-700">Visitas ao longo do tempo</h2>
          <div className="flex gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value as 'day' | 'week' | 'month')}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Top Links: borrado para plano free */}
        <div className={`bg-white rounded-xl shadow p-6 relative flex flex-col gap-3`}> 
          <h3 className="text-lg font-bold text-blue-700 mb-4">Top Links</h3>
          <ul className="divide-y divide-gray-100">
            {mockData.topLinks.map((link) => (
              <li key={link.id} className="flex justify-between py-2">
                <span className="text-gray-700">{link.title}</span>
                <span className="font-semibold text-blue-700">{link.clicks} cliques</span>
              </li>
            ))}
          </ul>
          {plan === 'free' && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
              <span className="text-blue-700 font-bold mb-2">Recurso premium</span>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
                onClick={() => window.location.href = '/subscription'}
              >
                Faça upgrade para ver
              </button>
            </div>
          )}
        </div>
        {/* Visitantes por País: igual ao Top Links */}
        <div className={`bg-white rounded-xl shadow p-6 relative flex flex-col gap-3`}>
          <h3 className="text-lg font-bold text-blue-700 mb-4">Visitantes por País</h3>
          <ul className="divide-y divide-gray-100">
            {mockData.visitorsByCountry.map((country) => (
              <li key={country.country} className="flex justify-between py-2">
                <span className="text-gray-700">{country.country}</span>
                <span className="font-semibold text-blue-700">{country.visits} visitas</span>
              </li>
            ))}
          </ul>
          {plan === 'free' && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
              <span className="text-blue-700 font-bold mb-2">Recurso premium</span>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
                onClick={() => window.location.href = '/subscription'}
              >
                Faça upgrade para ver
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}