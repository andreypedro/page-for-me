import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useState } from 'react';
import AnalyticsCard from '../components/Analytics/AnalyticsCard';
import VisitorChart from '../components/Analytics/VisitorChart';

const filterOptions = [
  { label: 'Dia', value: 'day' },
  { label: 'Semana', value: 'week' },
  { label: 'Mês', value: 'month' },
];

export default function Dashboard() {
  const analytics = useSelector((state: RootState) => state.analytics.data);
  const profile = useSelector((state: RootState) => state.user.user);
  const [filter, setFilter] = useState<'day' | 'week' | 'month'>('day');
  const [plan, setPlan] = useState<'free' | 'premium'>('free');

  // Fallback para mock se não houver dados (apenas para dev)
  const mockStats = analytics
    ? {
        totalVisits: analytics.totalVisits,
        uniqueVisitors: analytics.uniqueVisitors,
        clickRate: analytics.clickRate,
        topLink: analytics.topLinks[0]?.title || '-',
        conversionRate: 12, // Valor mock, ajuste conforme necessário
      }
    : {
        totalVisits: 0,
        uniqueVisitors: 0,
        clickRate: 0,
        topLink: '-',
        conversionRate: 0,
      };

  const mockTrends = {
    day: analytics?.dailyVisits || [],
    week: [
      { date: '2025-05-27', visits: 210 },
      { date: '2025-06-03', visits: 168 },
    ],
    month: [
      { date: '2025-05-01', visits: 900 },
      { date: '2025-06-01', visits: 1445 },
    ],
  };

  // Quantidade de links cadastrados
  const linksCount = profile?.links?.length || 0;
  // Social links
  const socialLinks = profile?.socialLinks?.filter((l) => l.url) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner de aviso para plano Free */}
      {plan === 'free' && (
        <div className="mb-6 bg-blue-100 border border-blue-300 rounded-lg p-4 flex items-center justify-between shadow">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">
              Free
            </span>
            <span className="text-blue-900 font-medium">
              Você está no plano gratuito. Faça upgrade para liberar todos os
              recursos premium do dashboard!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
              onClick={() => (window.location.href = '/subscription')}
            >
              Fazer upgrade
            </button>
          </div>
        </div>
      )}
      {/* Switch de plano para desenvolvimento */}
      <div className="mb-4 flex gap-2 items-center">
        <span className="text-xs text-gray-500">[Dev] Plano:</span>
        <button
          className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
            plan === 'free'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'
          }`}
          onClick={() => setPlan('free')}
        >
          Free
        </button>
        <button
          className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
            plan === 'premium'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'
          }`}
          onClick={() => setPlan('premium')}
        >
          Premium
        </button>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard de Analytics
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Visualize o desempenho dos seus links e acompanhe métricas essenciais
          para impulsionar sua presença digital.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
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
        <AnalyticsCard
          title="Links Cadastrados"
          value={linksCount}
          trend={0}
        />
      </div>
      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-700 mb-4">
            Redes Sociais Cadastradas
          </h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow border border-blue-100 bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition"
              >
                <span className="capitalize">{link.type}</span>
                <span className="text-xs text-gray-500">{link.url}</span>
              </a>
            ))}
          </div>
        </div>
      )}
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
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center relative">
          <span className="text-lg font-bold text-blue-700 mb-2">
            Link mais clicado
          </span>
          <span className="text-2xl text-gray-800 font-semibold">
            {plan === 'premium' ? mockStats.topLink : (
              <span className="blur-sm select-none">{mockStats.topLink}</span>
            )}
          </span>
          {plan === 'free' && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-10 rounded-xl">
              <span className="text-blue-700 font-bold mb-2">
                Recurso premium
              </span>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
                onClick={() => (window.location.href = '/subscription')}
              >
                Faça upgrade para ver
              </button>
            </div>
          )}
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center relative">
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