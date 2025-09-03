import React from 'react';
import { TikTokLogo } from './icons.tsx';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400 py-10">
        <TikTokLogo className="w-20 h-20 animate-bounce" />
        <p className="mt-4 text-lg font-semibold">Fetching video details...</p>
        <p className="text-sm">Please wait a moment.</p>
        <style>{`
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(-15%);
                    animation-timing-function: cubic-bezier(0.8,0,1,1);
                }
                50% {
                    transform: none;
                    animation-timing-function: cubic-bezier(0,0,0.2,1);
                }
            }
            .animate-bounce {
                animation: bounce 1s infinite;
            }
        `}</style>
    </div>
  );
};