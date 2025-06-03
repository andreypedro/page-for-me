import React, { useState } from 'react';
import ThemeSettings from '../components/Settings/ThemeSettings';

export default function Settings() {
  const [theme, setTheme] = useState('default');

  // Simulação de plano atual
  const currentPlan = {
    name: 'Free',
    price: 'R$ 0,00',
    features: [
      '1 página BioLink',
      'Links ilimitados',
      'Analytics básico',
      '100 visitantes/mês',
    ],
    highlight: 'Plano atual',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-base text-gray-600 mt-2">
          Gerencie seu plano e preferências da sua conta.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Seu Plano</h2>
          <div className="border border-blue-100 rounded-lg p-6 flex flex-col gap-3 mb-4 bg-blue-50">
            <span className="text-lg font-bold text-blue-700">{currentPlan.name}</span>
            <span className="text-2xl font-extrabold text-gray-900">{currentPlan.price}</span>
            <ul className="mt-2 mb-2 space-y-1">
              {currentPlan.features.map((f) => (
                <li key={f} className="text-gray-700 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold w-max">{currentPlan.highlight}</span>
          </div>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors w-full"
            onClick={() => window.location.href = '/subscription'}
          >
            Fazer upgrade de plano
          </button>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center text-gray-400">
          <span className="text-center">Outras configurações em breve…</span>
        </div>
      </div>
    </div>
  );
}