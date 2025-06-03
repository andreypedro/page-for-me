import React from 'react';
import { Link as LinkIcon, Trash2 } from 'lucide-react';
import type { LinkBlock as LinkBlockType } from '../types';

interface Props {
  block: LinkBlockType;
  onDelete: (id: string) => void;
  onEdit: (block: LinkBlockType) => void;
}

export default function LinkBlock({ block, onDelete, onEdit }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <LinkIcon className="h-5 w-5 text-gray-400" />
          <div>
            <h3 className="text-sm font-medium text-gray-900">{block.title}</h3>
            <p className="text-sm text-gray-500">{block.url}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(block)}
            className="text-gray-400 hover:text-blue-500"
          >
            <LinkIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(block.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}