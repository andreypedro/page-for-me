import React, { useState } from 'react';
import type { Profile } from '../../types';

interface Props {
  profile: Profile;
  onSave: (profile: Profile) => void;
}

export default function ProfileEditor({ profile, onSave }: Props) {
  const [formData, setFormData] = useState(profile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
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
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, bio: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3"
        />
      </div>
      <div>
        <label
          htmlFor="theme"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Tema de Cores
        </label>
        <div className="flex gap-3">
          {['default', 'dark', 'light'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onSave({ ...formData, theme: t })}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize border transition-colors ${
                formData.theme === t
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'
              }`}
            >
              {t === 'default' ? 'Padrão' : t === 'dark' ? 'Escuro' : 'Claro'}
            </button>
          ))}
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