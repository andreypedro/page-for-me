import React from 'react';

interface Props {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export default function ThemeSettings({ theme, onThemeChange }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Theme Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Customize the appearance of your BioLink page
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Color Theme
          </label>
          <div className="mt-2 space-x-4">
            {['default', 'dark', 'light'].map((t) => (
              <button
                key={t}
                onClick={() => onThemeChange(t)}
                className={`${
                  theme === t
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } px-4 py-2 rounded-md text-sm font-medium capitalize`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}