import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="max-w-5xl mx-auto w-full bg-white/80 rounded-2xl shadow-lg p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

// REMOVE this file. Use Layout.tsx for all dashboard pages to avoid duplicate layouts and sidebar/header issues.