import React from 'react';

interface LoaderProps {
  text?: string;
}

export default function Loader({ text = 'Carregando...' }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full animate-fade-in">
      <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className="text-blue-700 text-lg font-semibold tracking-wide animate-pulse">{text}</span>
    </div>
  );
}
