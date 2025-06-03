import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { LinkBlock as LinkBlockType } from '../types';

interface Props {
  blocks: LinkBlockType[];
  onReorder: (blocks: LinkBlockType[]) => void;
  onDelete: (id: string) => void;
  onEdit: (block: LinkBlockType) => void;
}

function EditableLinkBlock({
  block,
  onEdit,
  onDelete,
}: {
  block: LinkBlockType;
  onEdit: (block: LinkBlockType) => void;
  onDelete: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(block.title);
  const [url, setUrl] = useState(block.url);

  const handleSave = () => {
    onEdit({ ...block, title, url });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="bg-blue-50 p-4 rounded-lg shadow border border-blue-200 flex flex-col gap-3">
        <input
          className="border border-blue-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título do link"
        />
        <input
          className="border border-blue-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition w-full"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL do link"
        />
        <div className="flex gap-2 mt-2 justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors text-sm"
          >
            Salvar
          </button>
          <button
            onClick={() => setEditing(false)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium shadow hover:bg-gray-300 transition-colors text-sm"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-colors cursor-pointer"
      onClick={() => setEditing(true)}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{block.title}</h3>
          <p className="text-xs text-gray-500">{block.url}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(block.id);
          }}
          className="text-gray-400 hover:text-red-500 ml-2"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default function LinkBlocksList({
  blocks,
  onReorder,
  onDelete,
  onEdit,
}: Props) {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    const updatedBlocks = items.map((item, index) => ({ ...item, order: index }));
    onReorder(updatedBlocks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="links">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            {blocks.map((block, index) => (
              <Draggable key={block.id} draggableId={block.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <EditableLinkBlock
                      block={block}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}