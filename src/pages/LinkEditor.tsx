import React, { useState } from 'react';
import LinkBlocksList from '../components/LinkBlocksList';
import type { LinkBlock } from '../types';

export default function LinkEditor() {
  const [blocks, setBlocks] = useState<LinkBlock[]>([
    {
      id: '1',
      title: 'Meu Site',
      url: 'https://example.com',
      type: 'default',
      order: 0,
    },
  ]);

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
    </div>
  );
}