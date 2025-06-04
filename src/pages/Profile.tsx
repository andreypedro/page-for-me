import { useState } from 'react';
import ProfileEditor from '../components/Profile/ProfileEditor';
import ProfilePreview from '../components/Profile/ProfilePreview';
import type { Profile } from '../types';

export default function Profile() {
  const [profile, setProfile] = useState<Profile>({
    id: '1',
    name: 'John Doe',
    avatar: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=300',
    nickname: 'johndoe',
    bio: 'Professional photographer and digital artist',
    theme: 'default',
    socialLinks: [],
    links: []
  });

  const handleSave = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editar Perfil</h1>
        <p className="text-base text-gray-600 mt-2">
          Gerencie as informações do seu perfil público e visualize como os visitantes enxergam sua página.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Informações do Perfil</h2>
          <ProfileEditor />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Pré-visualização</h2>
          <ProfilePreview />
        </div>
      </div>
    </div>
  );
}