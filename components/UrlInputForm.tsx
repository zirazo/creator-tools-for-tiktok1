import React from 'react';
import { LinkIcon, PasteIcon } from './icons.tsx';

interface UrlInputFormProps {
  url: string;
  setUrl: (url: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const UrlInputForm: React.FC<UrlInputFormProps> = ({ url, setUrl, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handlePaste = async () => {
    if (!navigator.clipboard) {
        alert("Your browser does not support pasting from the clipboard.");
        return;
    }
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
      alert('Could not paste from clipboard. Please ensure you have granted permission.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LinkIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.tiktok.com/@user/video/123..."
          className="w-full pl-10 pr-40 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tiktok-red"
          disabled={isLoading}
        />
        <div className="absolute inset-y-0 right-0 flex items-center m-1.5 gap-2">
            <button
              type="button"
              onClick={handlePaste}
              className="p-2 text-gray-300 rounded-lg bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tiktok-blue disabled:opacity-50 transition-colors duration-200"
              disabled={isLoading}
              aria-label="Paste URL from clipboard"
            >
              <PasteIcon className="h-5 w-5" />
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-tiktok-red text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-tiktok-red disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Fetching...' : 'Download'}
            </button>
        </div>
      </div>
    </form>
  );
};
