import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Link as LinkIcon,
  BarChart2,
  Settings,
  User,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Links', href: '/links', icon: LinkIcon },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gradient-to-b from-blue-700 to-blue-400 text-white min-h-screen shadow-xl flex flex-col">
      <div className="h-20 flex items-center px-8 border-b border-blue-500">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold tracking-tight drop-shadow">
            PageFor.me
          </span>
        </Link>
      </div>
      <nav className="mt-6 flex-1 px-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-base shadow-sm
                  ${
                    isActive
                      ? 'bg-white text-blue-700 shadow-md'
                      : 'hover:bg-blue-500 hover:text-white text-blue-100'
                  }`}
              >
                <Icon
                  className={`mr-3 h-6 w-6 transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-blue-200 group-hover:text-white'
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="mt-auto p-4 border-t border-blue-500 text-xs text-blue-100 opacity-80">
        &copy; {new Date().getFullYear()} PageFor.me
      </div>
    </div>
  );
}