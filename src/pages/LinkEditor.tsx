import React, { useEffect, useState } from 'react';
import LinkBlocksList from '../components/LinkBlocksList';
import type { LinkBlock, Profile } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setUser } from '../store/userSlice';

export default function LinkEditor() {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.user.user) as Profile | null;
  const [blocks, setBlocks] = useState<LinkBlock[]>([]);

  // Inicializa blocks apenas uma vez a partir do Redux
  useEffect(() => {
    if (profile && profile.links) {
      setBlocks(profile.links);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Executa só no mount

  // Salva os links no Redux sempre que blocks mudar e for diferente do que está na store
  useEffect(() => {
    if (profile && JSON.stringify(profile.links) !== JSON.stringify(blocks)) {
      dispatch(setUser({ ...profile, links: blocks }));
    }
  }, [blocks]);

  const handleReorder = (newBlocks: LinkBlock[]) => {
    setBlocks(newBlocks);
  };

  const handleAdd = () => {
    const newId = (blocks.length + 1).toString();
    setBlocks([
      ...blocks,
      {
        id: newId,
        title: 'Novo Link',
        url: '',
        type: 'default',
        order: blocks.length,
      },
    ]);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este link?')) {
      setBlocks(blocks.filter((block) => block.id !== id));
    }
  };

  const handleEdit = (block: LinkBlock) => {
    setBlocks(blocks.map((b) => (b.id === block.id ? block : b)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Editor de Links</h1>
        <p className="text-base text-gray-600 mt-2">
          Organize, edite e personalize os links que aparecem na sua página BioLink.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-700">Seus Links</h2>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
          >
            + Adicionar Link
          </button>
        </div>
        <LinkBlocksList
          blocks={blocks}
          onReorder={handleReorder}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        <span>Quer adicionar suas redes sociais? </span>
        <a
          href="/app/profile"
          className="inline-block ml-1 px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors"
        >
          Ir para Perfil
        </a>
      </div>
    </div>
  );
}