import { memo, useMemo } from 'react';
import type { Profile } from '../types';

const mockProfile: Profile = {
  id: '1',
  name: 'Andrey Pedro Lefkum',
  nickname: 'andreylefkum',
  bio: 'Senior Software Engineer passionate by software and AI.',
  avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=300',
  theme: 'default',
  links: [
    {
      id: '1',
      title: 'Portfolio',
      url: 'https://example.com/portfolio',
      type: 'default',
      order: 0,
    },
    {
      id: '2',
      title: 'Book a Session',
      url: 'https://example.com/book',
      type: 'book',
      order: 1,
    },
    {
      id: '3',
      title: 'Instagram',
      url: 'https://instagram.com/johndoe',
      type: 'default',
      order: 2,
    },
    {
      id: '4',
      title: 'Contact on WhatsApp',
      url: 'https://wa.me/1234567890',
      type: 'whatsapp',
      order: 3,
    }
  ],
  socialLinks: []
};

// Memoize only if nickname changes
const useProfileMemo = (profile: Profile) => {
  return useMemo(() => profile, [profile.nickname]);
};

function PublicPage() {
  const profile = useProfileMemo(mockProfile);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover"
            loading="lazy"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
          <p className="text-blue-600 font-semibold text-sm mt-1">@{profile.nickname}</p>
          <p className="mt-2 text-gray-600">{profile.bio}</p>
        </div>

        <div className="mt-8 space-y-4">
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

        {/* Social icons at the bottom, like ProfilePreview */}
        <div className="flex justify-center gap-3 mt-8 mb-6">
          {profile.socialLinks
            .filter((l) =>
              ['instagram', 'facebook', 'twitter', 'whatsapp', 'tiktok'].includes(l.type)
            )
            .map((link) => (
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
                    <path d="M17 10.5c-1.1 0-2-.9-2-2V7h-2v8.5a1.5 1.5 0 1 1-1.5-1.5c.1 0 .3 0 .5.1v-1.9c-.2 0-.3-.1-.5-.1a3.5 3.5 0 a1 0 0 0 3.5 3.5V13c.6.4 1.3.7 2 .7v-1.2Z" />
                  </svg>
                )}
              </a>
            ))}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Powered by BioLink
        </footer>
      </div>
    </div>
  );
}

const MemoizedPublicPage = memo(PublicPage);
export default MemoizedPublicPage;