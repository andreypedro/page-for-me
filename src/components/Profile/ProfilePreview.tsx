import React from 'react';
import type { Profile } from '../../types';

interface Props {
  profile: Profile;
}

export default function ProfilePreview({ profile }: Props) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div className="text-center">
          {profile.avatar && (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-24 w-24 rounded-full mx-auto"
            />
          )}
          <h2 className="mt-4 text-xl font-bold text-gray-900">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm text-gray-500">{profile.bio}</p>
        </div>
        <div className="mt-6 space-y-3">
          {profile.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}