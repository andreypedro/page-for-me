import { Link, useLocation } from 'react-router-dom';
import { Globe2,
  LayoutDashboard,
  Link as LinkIcon,
  BarChart2,
  Settings,
  User,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/app/', icon: LayoutDashboard },
  { name: 'Perfil', href: '/app/profile', icon: User },
  { name: 'Links', href: '/app/links', icon: LinkIcon },
  { name: 'Analytics', href: '/app/analytics', icon: BarChart2 },
  { name: 'Página Pública', href: '/u/user', icon: Globe2, external: true },
  { name: 'Configurações', href: '/app/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-gradient-to-b from-blue-700 to-blue-400 text-white min-h-screen shadow-xl flex flex-col">
      <div className="h-20 flex items-center px-8 border-b border-blue-500">
        <Link to="/" className="flex items-center w-full">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-blue-600 to-indigo-500 shadow-lg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="8"
                fill="url(#paint0_linear_1_1)"
              />
              <path
                d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="16" r="2" fill="#fff" />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1"
                  x1="2"
                  y1="2"
                  x2="30"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="ml-2 flex flex-col justify-center h-20">
            <svg
              width="120"
              height="48"
              viewBox="0 0 120 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <text
                x="0"
                y="32"
                fontFamily="'Poppins', 'Inter', sans-serif"
                fontWeight="700"
                fontSize="30"
                fill="white"
                letterSpacing="-1.5"
                style={{
                  textShadow: '0 2px 8px rgba(49, 130, 206, 0.25), 0 1px 0 #6366F1'
                }}
              >
                Page4
              </text>
              <g>
                <rect
                  x="80"
                  y="22"
                  rx="8"
                  width="40"
                  height="26"
                  fill="url(#meGradient)"
                />
                <text
                  x="85"
                  y="40"
                  fontFamily="'Poppins', 'Inter', sans-serif"
                  fontWeight="700"
                  fontSize="18"
                  fill="#fff"
                  letterSpacing="-1"
                  style={{
                    textShadow: '0 1px 4px #6366F1'
                  }}
                >
                  .me
                </text>
              </g>
              <defs>
                <linearGradient id="meGradient" x1="82" y1="12" x2="116" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </Link>
      </div>
      <nav className="mt-6 flex-1 px-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-base shadow-sm hover:bg-blue-500 hover:text-white text-blue-100`}
              >
                <Icon className="mr-3 h-6 w-6 text-blue-200 group-hover:text-white" />
                {item.name}
              </a>
            ) : (
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
    </div>
  );
}