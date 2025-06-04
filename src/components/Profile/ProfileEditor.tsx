import React from 'react';
import type { Profile } from '../../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setUser } from '../../store/userSlice';

export default function ProfileEditor(/*{ profile, onSave }: Props*/) {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.user.user);
  const [formData, setFormData] = React.useState<Profile>(profile || {
    id: '', name: '', avatar: '', nickname: '', bio: '', theme: 'light', socialLinks: [], links: []
  });

  React.useEffect(() => {
    if (profile) setFormData(profile);
  }, [profile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUser(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: (e.target as HTMLInputElement).value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3"
        />
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="bio"
          rows={3}
          value={formData.bio}
          onChange={e => setFormData({ ...formData, bio: (e.target as HTMLTextAreaElement).value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Redes Sociais
        </label>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E1306C]">
              <svg
                className="w-4 h-4"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" rx="6" fill="none" />
                <path
                  d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.7a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm3.7-5.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Seu usuário do Instagram"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm px-3 py-2"
              value={formData.socialLinks.find((l) => l.type === 'instagram')?.url.replace(
                'https://instagram.com/',
                ''
              ) || ''}
              onChange={(e) => {
                const username = (e.target as HTMLInputElement).value;
                setFormData({
                  ...formData,
                  socialLinks: [
                    ...formData.socialLinks.filter(l => l.type !== 'instagram'),
                    ...(username ? [{
                      id: 'ig',
                      url: 'https://instagram.com/' + username,
                      type: 'instagram' as const,
                    }] : [])
                  ],
                });
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F3]">
              <svg
                className="w-4 h-4"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" rx="6" fill="none" />
                <path
                  d="M15.5 8.5h-2V7.5c0-.4.3-.5.5-.5h1.5V5h-2c-1.1 0-2 .9-2 2v1.5H9v2h2V19h2.5v-8.5h1.7l.3-2Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Seu usuário do Facebook"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
              value={formData.socialLinks.find((l) => l.type === 'facebook')?.url.replace(
                'https://facebook.com/',
                ''
              ) || ''}
              onChange={(e) => {
                const username = (e.target as HTMLInputElement).value;
                setFormData({
                  ...formData,
                  socialLinks: [
                    ...formData.socialLinks.filter(l => l.type !== 'facebook'),
                    ...(username ? [{
                      id: 'fb',
                      url: 'https://facebook.com/' + username,
                      type: 'facebook' as const,
                    }] : [])
                  ],
                });
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2]">
              <svg
                className="w-4 h-4"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" rx="6" fill="none" />
                <path
                  d="M19 8.3c-.5.2-1 .4-1.5.5.5-.3.9-.8 1.1-1.3-.5.3-1 .6-1.6.7-.5-.5-1.2-.8-2-.8-1.5 0-2.7 1.2-2.7 2.7 0 .2 0 .4.1.6-2.2-.1-4.1-1.2-5.4-2.9-.2.4-.3.8-.3 1.2 0 .9.5 1.7 1.2 2.2-.4 0-.7-.1-1-.2v.1c0 1.3.9 2.3 2.1 2.6-.2.1-.4.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.3 1.7 2.4 1.7-1 .8-2.2 1.3-3.5 1.3-.2 0-.4 0-.6 0 1.2.8 2.6 1.3 4.1 1.3 4.9 0 7.6-4.1 7.6-7.6v-.3c.5-.4.9-.8 1.2-1.3Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Seu usuário do Twitter/X"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm px-3 py-2"
              value={formData.socialLinks.find((l) => l.type === 'twitter')?.url.replace(
                'https://twitter.com/',
                ''
              ) || ''}
              onChange={(e) => {
                const username = (e.target as HTMLInputElement).value;
                setFormData({
                  ...formData,
                  socialLinks: [
                    ...formData.socialLinks.filter(l => l.type !== 'twitter'),
                    ...(username ? [{
                      id: 'tw',
                      url: 'https://twitter.com/' + username,
                      type: 'twitter' as const,
                    }] : [])
                  ],
                });
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#25D366]">
              <svg
                className="w-4 h-4"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" rx="6" fill="none" />
                <path
                  d="M12 5a7 7 0 0 0-6.1 10.5l-1 3.5 3.6-1A7 7 0 1 0 12 5Zm3.9 10.1c-.2.5-1.1.9-1.5 1-.4.1-.9.2-2.9-.6-2.4-1-3.9-3.4-4-3.6-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8.2-.2.4-.3.6-.3.2 0 .3 0 .4.1.1.1.3.4.4.7.1.2.2.5.1.7-.1.2-.2.5-.3.6-.1.1-.2.3 0 .6.2.3.7 1.1 1.5 1.7.7.6 1.3.8 1.6.9.2.1.4.1.5-.1.1-.2.6-.7.8-.9.2-.2.3-.2.5-.1.2.1 1.2.6 1.4.7.2.1.3.1.4.2.1.1.1.2.1.3Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Seu número do WhatsApp (apenas números)"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm px-3 py-2"
              value={formData.socialLinks.find((l) => l.type === 'whatsapp')?.url.replace(
                'https://wa.me/',
                ''
              ) || ''}
              onChange={(e) => {
                const number = (e.target as HTMLInputElement).value.replace(/\D/g, '');
                setFormData({
                  ...formData,
                  socialLinks: [
                    ...formData.socialLinks.filter(l => l.type !== 'whatsapp'),
                    ...(number ? [{
                      id: 'wa',
                      url: 'https://wa.me/' + number,
                      type: 'whatsapp' as const,
                    }] : [])
                  ],
                });
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#000]">
              <svg
                className="w-4 h-4"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" rx="6" fill="none" />
                <path
                  d="M17 10.5c-1.1 0-2-.9-2-2V7h-2v8.5a1.5 1.5 0 1 1-1.5-1.5c.1 0 .3 0 .5.1v-1.9c-.2 0-.3-.1-.5-.1a3.5 3.5 0 1 0 3.5 3.5V13c.6.4 1.3.7 2 .7v-1.2Z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Seu usuário do TikTok"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm px-3 py-2"
              value={formData.socialLinks.find((l) => l.type === 'tiktok')?.url.replace(
                'https://tiktok.com/@',
                ''
              ) || ''}
              onChange={(e) => {
                const username = (e.target as HTMLInputElement).value;
                setFormData({
                  ...formData,
                  socialLinks: [
                    ...formData.socialLinks.filter(l => l.type !== 'tiktok'),
                    ...(username ? [{
                      id: 'tt',
                      url: 'https://tiktok.com/@' + username,
                      type: 'tiktok' as const,
                    }] : [])
                  ],
                });
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tema da página pública</label>
        <div className="flex gap-3 mb-4">
          <button
            type="button"
            className={`rounded-lg px-4 py-2 border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${formData.theme === 'pink' ? 'bg-[#E1306C] text-white border-[#E1306C]' : 'bg-white text-gray-700 border-gray-300 hover:bg-pink-50'}`}
            onClick={() => setFormData({ ...formData, theme: 'pink' })}
          >
            Rosa
          </button>
          <button
            type="button"
            className={`rounded-lg px-4 py-2 border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${formData.theme === 'blue' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={() => setFormData({ ...formData, theme: 'blue' })}
          >
            Azul
          </button>
          <button
            type="button"
            className={`rounded-lg px-4 py-2 border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${formData.theme === 'green' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'}`}
            onClick={() => setFormData({ ...formData, theme: 'green' })}
          >
            Verde
          </button>
          <button
            type="button"
            className={`rounded-lg px-4 py-2 border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${formData.theme === 'light' ? 'bg-gray-100 text-gray-900 border-gray-200' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            onClick={() => setFormData({ ...formData, theme: 'light' })}
          >
            Claro
          </button>
          <button
            type="button"
            className={`rounded-lg px-4 py-2 border text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${formData.theme === 'dark' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            onClick={() => setFormData({ ...formData, theme: 'dark' })}
          >
            Escuro
          </button>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}