import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import type { LinkBlock, Profile, SocialLinkBlock } from '../../types';

export default function ProfilePreview() {
  const profile = useSelector((state: RootState) => state.user.user) as Profile | null;
  if (!profile) return <div>Carregando...</div>;

  // Temas disponíveis
  const themeColors = {
    pink: {
      bg: 'bg-[#E1306C]',
      text: 'text-[#E1306C]',
      card: 'bg-pink-50',
    },
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      card: 'bg-blue-50',
    },
    green: {
      bg: 'bg-green-600',
      text: 'text-green-600',
      card: 'bg-green-50',
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      card: 'bg-white',
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      card: 'bg-gray-900',
    },
  } as const;
  const theme = (profile.theme as keyof typeof themeColors) || 'light';
  const themeObj = themeColors[theme] || themeColors['light'];

  const themeGradients = {
    pink: 'bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600',
    blue: 'bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-600',
    green: 'bg-gradient-to-br from-green-200 via-green-400 to-emerald-600',
    light: 'bg-gradient-to-br from-gray-100 via-gray-300 to-white',
    dark: 'bg-gradient-to-br from-[#23272f] via-[#18181b] to-black',
  } as const;
  const gradientBg = themeGradients[theme] || themeGradients['light'];

  return (
    <div className={`max-w-lg mx-auto shadow rounded-lg overflow-hidden transition-colors duration-300 ${gradientBg} ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
      <div className={`px-4 py-5 sm:p-6 ${themeObj.card}`}>
        <div className="text-center">
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-24 w-24 rounded-full mx-auto"
            />
          )}
          <h2 className={`mt-4 text-xl font-bold ${theme === 'dark' ? 'text-white' : themeObj.text}`}>
            {profile.name}
          </h2>
          <p className="mt-1 text-sm text-gray-500">{profile.bio}</p>
          <div className="mt-8">
            {profile.links && profile.links.length > 0 ? (
              <div className="space-y-4">
                {profile.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                  >
                    <span className="text-gray-800 font-medium">{link.title}</span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm mb-2 text-center">Seus links aparecerão aqui</div>
            )}
            <div className="flex justify-center mt-4">
              <a
                href="/app/links"
                className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-100 transition"
              >
                Ir para área de links
              </a>
            </div>
          </div>
          <div className='mt-8'>
            <div className="flex justify-center gap-3 mb-4">
              {profile.socialLinks
                .filter((l: SocialLinkBlock) =>
                  ['instagram', 'facebook', 'twitter', 'whatsapp', 'tiktok'].includes(l.type)
                )
                .map((link: SocialLinkBlock) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow"
                    style={{
                      background:
                        link.type === 'instagram'
                          ? '#E1306C'
                          : link.type === 'facebook'
                          ? '#1877F3'
                          : link.type === 'twitter'
                          ? '#1DA1F2'
                          : link.type === 'whatsapp'
                          ? '#25D366'
                          : link.type === 'tiktok'
                          ? '#000'
                          : '#eee',
                    }}
                  >
                    {link.type === 'instagram' && (
                      <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="none" />
                        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.7a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm3.7-5.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
                      </svg>
                    )}
                    {link.type === 'facebook' && (
                      <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="none" />
                        <path d="M15.5 8.5h-2V7.5c0-.4.3-.5.5-.5h1.5V5h-2c-1.1 0-2 .9-2 2v1.5H9v2h2V19h2.5v-8.5h1.7l.3-2Z" />
                      </svg>
                    )}
                    {link.type === 'twitter' && (
                      <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="none" />
                        <path d="M19 8.3c-.5.2-1 .4-1.5.5.5-.3.9-.8 1.1-1.3-.5.3-1 .6-1.6.7-.5-.5-1.2-.8-2-.8-1.5 0-2.7 1.2-2.7 2.7 0 .2 0 .4.1.6-2.2-.1-4.1-1.2-5.4-2.9-.2.4-.3.8-.3 1.2 0 .9.5 1.7 1.2 2.2-.4 0-.7-.1-1-.2v.1c0 1.3.9 2.3 2.1 2.6-.2.1-.4.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.3 1.7 2.4 1.7-1 .8-2.2 1.3-3.5 1.3-.2 0-.4 0-.6 0 1.2.8 2.6 1.3 4.1 1.3 4.9 0 7.6-4.1 7.6-7.6v-.3c.5-.4.9-.8 1.2-1.3Z" />
                      </svg>
                    )}
                    {link.type === 'whatsapp' && (
                      <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="none" />
                        <path d="M12 5a7 7 0 0 0-6.1 10.5l-1 3.5 3.6-1A7 7 0 1 0 12 5Zm3.9 10.1c-.2.5-1.1.9-1.5 1-.4.1-.9.2-2.9-.6-2.4-1-3.9-3.4-4-3.6-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8.2-.2.4-.3.6-.3.2 0 .3 0 .4.1.1.1.3.4.4.7.1.2.2.5.1.7-.1.2-.2.5-.3.6-.1.1-.2.3 0 .6.2.3.7 1.1 1.5 1.7.7.6 1.3.8 1.6.9.2.1.4.1.5-.1.1-.2.6-.7.8-.9.2-.2.3-.2.5-.1.2.1 1.2.6 1.4.7.2.1.3.1.4.2.1.1.1.2.1.3Z" />
                      </svg>
                    )}
                    {link.type === 'tiktok' && (
                      <svg className="w-5 h-5" fill="#fff" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="none" />
                        <path d="M17 10.5c-1.1 0-2-.9-2-2V7h-2v8.5a1.5 1.5 0 1 1-1.5-1.5c.1 0 .3 0 .5.1v-1.9c-.2 0-.3-.1-.5-.1a3.5 3.5 0 1 0 3.5 3.5V13c.6.4 1.3.7 2 .7v-1.2Z" />
                      </svg>
                    )}
                  </a>
                ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}