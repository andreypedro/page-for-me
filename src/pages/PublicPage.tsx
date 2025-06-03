import React from 'react';
import type { Profile } from '../types';

const mockProfile: Profile = {
  id: '1',
  name: 'John Doe',
  bio: 'Professional photographer and digital artist',
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
};

export default function PublicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <img
            src={mockProfile.avatar}
            alt={mockProfile.name}
            className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            {mockProfile.name}
          </h1>
          <p className="mt-2 text-gray-600">{mockProfile.bio}</p>
        </div>

        <div className="mt-8 space-y-4">
          {mockProfile.links.map((link) => (
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

        <footer className="mt-12 text-center text-sm text-gray-500">
          Powered by BioLink
        </footer>
      </div>
    </div>
  );
}