import React from 'react';
import ProfilePreview from '../components/Profile/ProfilePreview';
import type { Profile } from '../types';

export default function Preview() {
  const profile: Profile = {
    id: '1',
    name: 'John Doe',
    bio: 'Professional photographer and digital artist',
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
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
          <p className="mt-1 text-sm text-gray-500">
            Preview how your profile looks to visitors
          </p>
        </div>
        <ProfilePreview profile={profile} />
      </div>
    </div>
  );
}